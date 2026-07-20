import Anthropic from "@anthropic-ai/sdk";
import type {
  BetaManagedAgentsStreamSessionEvents,
} from "@anthropic-ai/sdk/resources/beta/sessions/events";

import { searchProducts } from "../../../lib/tools/searchProducts";
import { createSupportTicket } from "../../../lib/tools/createSupportTicket";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const stream = new ReadableStream({
    async start(ctrl) {

      const send = (
        event: string,
        data: unknown
      ) => {
        ctrl.enqueue(
          new TextEncoder().encode(
            `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`
          )
        );
      };


      const forward = async (
  ev: BetaManagedAgentsStreamSessionEvents
) : Promise<boolean> => {

        switch (ev.type) {


          case "agent.message":

            send("message", {
              text: ev.content
                .map(c => "text" in c ? c.text : "")
                .join(""),
            });

            return false;



          case "agent.custom_tool_use":

            console.log("CUSTOM TOOL:", ev);


            if (ev.name === "search_products") {

              const query = String(
                ev.input?.query ?? ""
              );


              const results = searchProducts(query);


              console.log(
                "SEARCH RESULTS:",
                results
              );


              await client.beta.sessions.events.send(
                id,
                {
                  events: [
                    {
                      type: "user.custom_tool_result",
                      custom_tool_use_id: ev.id,
                      content: [
                        {
                          type: "text",
                          text: JSON.stringify(results),
                        },
                      ],
                    },
                  ],
                }
              );
            }

            if (ev.name === "create_support_ticket") {

              const ticket = createSupportTicket({
                summary: String(ev.input?.summary ?? ""),
                email: String(ev.input?.email ?? ""),
                orderNumber: String(ev.input?.orderNumber ?? ""),
              });

              await client.beta.sessions.events.send(id, {
                events: [
                  {
                    type: "user.custom_tool_result",
                    custom_tool_use_id: ev.id,
                    content: [
                      {
                        type: "text",
                        text: JSON.stringify(ticket),
                      },
                    ],
                  },
                ],
              });
            }


            return false;



          case "user.custom_tool_result":

            send("tool_result", {
              content: ev.content,
            });

            return false;



          case "session.status_idle":

            if (ev.stop_reason?.type === "end_turn") {

              send("done", {
                sessionId: id,
              });

              return true;
            }

            return false;



          default:

            return false;
        }
      };



      try {

        const evStream =
          await client.beta.sessions.events.stream(id);


        for await (const ev of evStream) {

          if (await forward(ev)) {
            break;
          }

        }


      } catch (error) {

        console.error(
          "Agent stream error:",
          error
        );

        send("message", {
          text: "Sorry, something went wrong."
        });


      } finally {

        ctrl.close();

      }

    },
  });


  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}