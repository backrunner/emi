export type ChatGPTRole = 'system' | 'user' | 'assistant';

export enum ChatGPTModel {
  gpt35Turbo = 'gpt-3.5-turbo'
}

export interface ChatGPTMessage {
  role: ChatGPTRole;
  content: string;
}

export type ChatGPTMessages = ChatGPTMessage[];

export interface ChatGPTPayload {
  model: ChatGPTModel;
  messages: ChatGPTMessages;
}

export interface ChatGPTUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

export interface ChatGPTChoice {
  index: number;
  finish_reason: string;
  message: ChatGPTMessage;
}

export interface ChatGPTResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: ChatGPTChoice[];
  usage: ChatGPTUsage;
}
