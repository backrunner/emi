import { defineStore } from 'pinia';
import type { AChatMessage } from '@any-design/anyui';

import type { HydratedChatMessage } from '@/global';
import { transformMessage } from '@/utils/message';

export const useMessageStore = defineStore('messages', {
  state: () => ({
    messages: [] as AChatMessage[],
  }),
  actions: {
    addMessage(message: HydratedChatMessage) {
      this.messages.push(transformMessage(message));
    },
    pushMessage(message: AChatMessage) {
      this.messages.push(message);
    },
    setMessages(messages: HydratedChatMessage[]) {
      this.messages = messages.map((message) => transformMessage(message));
    },
  },
});
