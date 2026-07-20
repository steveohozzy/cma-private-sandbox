let ticketCounter = 1000;

export function createSupportTicket(input: {
  summary: string;
  email?: string;
  orderNumber?: string;
}) {
  ticketCounter++;

  const ticket = {
    ticketId: `THEO-${ticketCounter}`,
    status: "Open",
    created: new Date().toISOString(),
    summary: input.summary,
    email: input.email ?? "Not provided",
    orderNumber: input.orderNumber ?? "Not provided",
  };

  console.log("🎫 SUPPORT TICKET CREATED");
  console.table(ticket);

  return ticket;
}