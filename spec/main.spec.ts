import { assertExists } from "https://deno.land/std@0.190.0/testing/asserts.ts";
import { load } from "https://deno.land/std/dotenv/mod.ts";

Deno.test(async function readEnvironment() {
  const env = await load();
  assertExists(env["AZURE_OPENAI_ENDPOINT"]);
  assertExists(env["AZURE_OPENAI_API_KEY"]);
  assertExists(env["AZURE_OPENAI_DEPLOYMENT"]);
});
