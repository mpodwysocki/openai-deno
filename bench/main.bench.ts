import { load } from "https://deno.land/std/dotenv/mod.ts";

Deno.bench(async function loadEnvironment() {
  const env = await load();
  env["AZURE_OPENAI_ENDPOINT"];
  env["AZURE_OPENAI_API_KEY"];
  env["AZURE_OPENAI_DEPLOYMENT"];
});
