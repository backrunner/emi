import axios from 'axios';

import { ChatGPTModel, type ChatGPTMessages, type ChatGPTPayload, type ChatGPTResponse } from '@/types/openai';
import { secureStore } from '../store';

const OPENAI_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

const buildChatGPTPayload = (messages: ChatGPTMessages) => ({
  model: ChatGPTModel.gpt35Turbo,
  messages,
});

const sendChatGPTRequest = async (payload: ChatGPTPayload) => {
  const res = await axios.post(OPENAI_ENDPOINT, payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${secureStore.get('openai_api_key')}`,
    },
  });
  if (res.status !== 200) {
    throw res;
  }
  return res.data as ChatGPTResponse;
};

export const requestCompletions = async (messages: ChatGPTMessages) => {
  const res = await sendChatGPTRequest(buildChatGPTPayload(messages));
  const completedMessage = res.choices?.messages?.[0];
  if (!completedMessage) {
    throw res;
  }
  return completedMessage;
};
