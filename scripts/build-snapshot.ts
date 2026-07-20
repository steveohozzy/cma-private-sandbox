import { Sandbox } from "@vercel/sandbox";
import { readFileSync } from "node:fs";

async function main() {
  const sandbox = await Sandbox.create({ runtime: "node24" });
  await sandbox.writeFiles([
    { path: "/vercel/sandbox/package.json",
      content: Buffer.from('{"type":"module"}') },
    { path: "/vercel/sandbox/runner.ts",
      content: readFileSync("./sandbox/runner.ts") },
  ]);
  await sandbox.runCommand("npm", ["install", "@anthropic-ai/sdk", "tsx"]);
  const snapshot = await sandbox.snapshot();
  console.log("SANDBOX_SNAPSHOT_ID=" + snapshot.snapshotId);
  await sandbox.stop();
}
main();