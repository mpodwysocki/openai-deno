# Azure OpenAI Playground for Deno

This is an example app using [Deno](https://deno.land/) and Azure OpenAI to stream chat completions.

## Installation

```bash
git clone https://github.com/mpodwysocki/openai-deno.git

cd openai-deno
```

You will need to create a `.env` file with the credentials such as what is in the `sample.env` file for the Express port as well as the Azure OpenAI Credentials.

```bash
# Azure OpenAI
AZURE_OPENAI_API_KEY=
AZURE_OPENAI_ENDPOINT=
AZURE_OPENAI_DEPLOYMENT=
```

To run the sample, use the following:

```bash
deno task dev
```

## LICENSE

MIT
