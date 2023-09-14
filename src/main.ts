import { load } from "https://deno.land/std/dotenv/mod.ts";
import { AzureKeyCredential } from "npm:@azure/openai";
import { createOpenAI, listChatCompletions } from "npm:@azure/openai/api";

const env = await load();

const endpoint = env["AZURE_OPENAI_ENDPOINT"]!;
const azureApiKey = env["AZURE_OPENAI_API_KEY"]!;
const deploymentId = env["AZURE_OPENAI_DEPLOYMENT"]!;

console.log("Environment", endpoint, azureApiKey, deploymentId);

const messages = [
  {
    role: "system",
    content: "You are a helpful assistant. You will talk like a pirate.",
  },
  { role: "user", content: "Can you help me?" },
  {
    role: "assistant",
    content: "Arrrr! Of course, me hearty! What can I do for ye?",
  },
  { role: "user", content: "What's the best way to train a parrot?" },
];

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const context = createOpenAI(endpoint, new AzureKeyCredential(azureApiKey));
  const events = listChatCompletions(context, messages, deploymentId, {
    maxTokens: 128,
  });

  for await (const event of events) {
    for (const choice of event.choices) {
      console.log(choice.delta?.content);
    }
  }
}
