import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function main() {
  const agent = await client.beta.agents.create({
    name: "Vercel Sandbox Agent",
    model: "claude-opus-4-7",
    system: "You are a coding assistant with a Linux environment.",
    tools: [
      {
        type: "custom",
        name: "run_shell",
        description: "Run a shell command in the sandbox. Returns stdout.",
        input_schema: {
          type: "object",
          properties: {
            command: { type: "string" },
          },
          required: ["command"],
        },
      },
            {
        type: "custom",
        name: "read_file",
        description: "Read the contents of a file at the given path.",
        input_schema: {
          type: "object",
          properties: {
            path: { type: "string" },
          },
          required: ["path"],
        },
      },
    ],
    betas: ["managed-agents-2026-04-01"],
  });
  console.log("ANTHROPIC_AGENT_ID=" + agent.id);
}
main();