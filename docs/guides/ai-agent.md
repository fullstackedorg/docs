# Using AI Agent

Developing with ai agent can drastically augment your development speed and help you in fields you have less knowledge. FullStacked allows you to setup most of major ai agent providers so you can choose the ones you prefer.

## Configuring Providers

Go to Setting and scroll to the Provider Configuration section. Select the provider you’d like and fill in what’s needed to create the connection. Use the `test` button to make sure it is well configured, then hit save to keep the configuration.

## Chat

Use the prompt to start a conversation with an AI agent and every code blocks can be converted to a new file or copied to clipboard.

![Screenshot-2025-04-03-at-4.00.17-PM.png](https://files.fullstacked.org/Screenshot-2025-04-03-at-4.00.17-PM.png)

Every chat conversation will be stored under the `chat/` directory which is ignored by git. If you want to commit the chat conversation to your project’s repository, simply move the file to the root of your project or any other directory.

![Screenshot-2025-04-03-at-4.01.26-PM.png](https://files.fullstacked.org/Screenshot-2025-04-03-at-4.01.26-PM.png)

## Code Completion

If you have providers that supports code completion, when opening a code file, you’ll have the option to select a provider and a model to help you with code completion. You’ll see inline suggestions appear and use the `Tab` key of click on with to apply them.

![BlockNote image](https://files.fullstacked.org/Screenshot-2025-04-03-at-4.01.00-PM.png)

## Provider and Model Selection

Click the cog icon to select open the selection view and from there, select a provider and the model.

![Screenshot-2025-04-03-at-3.52.26-PM.png](https://files.fullstacked.org/Screenshot-2025-04-03-at-3.52.26-PM.png)

## Available Providers


| Provider           | Chat | Code Completion | Console                         |
| ------------------ | ---- | --------------- | ------------------------------- |
| Ollama             | ✅    | ✅               |                                 |
| OpenAI             | ✅    |                 | <https://platform.openai.com>   |
| Claude (Anthropic) | ✅    |                 | <https://console.anthropic.com> |
| Google             | ✅    |                 | <https://aistudio.google.com>   |
| DeepSeek           | ✅    | ✅               | <https://platform.deepseek.com> |
| Mistral            | ✅    | ✅               | <https://console.mistral.ai>    |
| xAI                | ✅    |                 | <https://console.x.ai>          |
