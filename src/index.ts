import { retry } from 'ts-retry-promise';
import OpenAI from "openai";
import ChatCompletionMessageParam = OpenAI.ChatCompletionMessageParam;
import {DEFAULT_CHAT_MODEL, DEFAULT_EMBEDDING_MODEL} from "@/constants";
export * from "@/models";



export class OpenAIService {
  private openai: OpenAI;
  constructor(private readonly apiKey: string){
    this.openai = new OpenAI({
      apiKey: this.apiKey,
    });
  }

  private async getEmbedding(input: string, model:string = DEFAULT_EMBEDDING_MODEL): Promise<number[]> {
    const embeddingResponse = await this.openai.embeddings.create({
      model,
      input,
    });
    return embeddingResponse.data[0].embedding;
  }

  public async embedding(input: string): Promise<number[]> {
    return await retry(() => this.getEmbedding(input), {
      backoff: "LINEAR",
      delay:1000,
      retries: 5
    });
  }

  private async getChatCompletion(messages:  Array<ChatCompletionMessageParam>, model : string = DEFAULT_CHAT_MODEL): Promise<string> {
    const chatCompletion = await this.openai.chat.completions.create({
      messages,
      model,
    });
    return chatCompletion.choices[0].message.content as string;
  }

  public async chatCompletion(messages: Array<ChatCompletionMessageParam>): Promise<string> {
    return await retry(() => this.getChatCompletion(messages), {
      backoff: "LINEAR",
      retries: 5,
      delay:1000,
    });
  }

}

