import { net } from 'electron';
import { ChatGPTModel, type ChatGPTMessages, type ChatGPTPayload, type ChatGPTResponse } from '@/types/openai';
import { secureStore } from '../store';

const OPENAI_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

const buildChatGPTPayload = (messages: ChatGPTMessages) => ({
  model: ChatGPTModel.gpt35Turbo,
  messages,
});

const sendChatGPTRequest = (payload: ChatGPTPayload) => {
  return new Promise<ChatGPTResponse>((resolve, reject) => {
    const request = net.request({
      url: OPENAI_ENDPOINT,
      method: 'POST',
    });
    request.on('response', (response) => {
      if (response.statusCode !== 200) {
        return reject(new Error('Failed to request OpenAI: ' + response.statusCode));
      }
      let respBody = '';
      response.on('data', (data) => {
        respBody += data.toString('utf-8');
      });
      response.on('end', () => {
        resolve(JSON.parse(respBody));
      });
      response.on('error', (error: Error) => {
        reject(error);
      });
      response.on('aborted', () => {
        reject(new Error('Request aborted'));
      })
    });
    request.setHeader('Content-Type', 'application/json');
    request.setHeader('Authorization', `Bearer ${secureStore.get('openai_api_key')}`);
    request.write(JSON.stringify(payload));
    request.end();
  })
};

export const requestCompletions = async (messages: ChatGPTMessages) => {
  console.debug('[api] sending response to ChatGPT', messages);
  const res = await sendChatGPTRequest(buildChatGPTPayload(messages));
  console.debug('[api] got response from ChatGPT:\n', JSON.stringify(res, null, 2));
  const completedMessage = res.choices?.[0]?.message;
  if (!completedMessage) {
    throw res;
  }
  // trim the responsed content
  completedMessage.content = completedMessage.content.trim();
  return completedMessage;
};
