import dotenv from "dotenv";
import Anthropic from "@anthropic-ai/sdk";

dotenv.config({ path: ".env.local" });

async function main() {
  console.log("API Key loaded:", !!process.env.ANTHROPIC_API_KEY);

  const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  const env = await client.beta.environments.create({
    name: "vercel-sandbox",
    config: { type: "self_hosted" },
    betas: ["managed-agents-2026-04-01"],
  });

  console.log("ANTHROPIC_ENVIRONMENT_ID=" + env.id);
}

main();