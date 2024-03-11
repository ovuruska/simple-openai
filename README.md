# Simple OpenAI Client

The `simple-openai` package enables easy integration of OpenAI's AI functionalities into your applications, focusing on handling large-scale requests efficiently. This package supports both chat completion and embedding features, which can be utilized with predefined models through enums for better type safety and ease of use. Here's an updated guide that incorporates the use of these enums.

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
    - [Chat Completion](#chat-completion)
        - [Using Enums](#using-enums)
    - [Embedding](#embedding)
        - [Using Enums](#embedding-using-enums)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with `simple-openai`, install it via npm:

```bash
npm install simple-openai
```

## Setup

Initialize the `OpenAIService` with your OpenAI API key:

```typescript
import { OpenAIService } from 'simple-openai';

const openAIService = new OpenAIService('your_openai_api_key');
```

## Usage

### Chat Completion

#### Using Enums

For chat completion, use the `ChatModels` enum to specify the model:

```typescript
import { ChatCompletionMessageParam } from "openai";
import { ChatModels } from 'simple-openai';

async function getChatCompletion() {
  const messages: Array<ChatCompletionMessageParam> = [
    { role: "user", content: "What is the weather like in London?" },
  ];

  // Using the enum to specify the model
  const response = await openAIService.chatCompletion(messages, ChatModels.GPT3);
  console.log(response);
}

getChatCompletion();
```

### Embedding

#### Embedding Using Enums

For embeddings, the `EmbeddingModels` enum helps in specifying the model:

```typescript
import { EmbeddingModels } from 'simple-openai';

async function getEmbedding() {
  const input = "The quick brown fox jumps over the lazy dog";

  // Using the enum to specify the model
  const embedding = await openAIService.embedding(input, EmbeddingModels.EMBEDDING3_SMALL);
  console.log(embedding);
}

getEmbedding();
```

## Contributing

We welcome contributions to improve `simple-openai`. Feel free to fork the repository, make your changes, and submit a pull request with a description of your updates. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open-sourced under the MIT License. See the LICENSE file for more details.

---
