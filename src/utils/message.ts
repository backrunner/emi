import { nanoid } from 'nanoid';
import type { HydratedChatMessage } from '@/global';

export const transformMessage = (message: HydratedChatMessage) => {
  return {
    id: message.id || nanoid(),
    content: message.content,
    role: (message.role === 'assistant' ? 'target' : 'self') as 'self' | 'target',
  };
};
