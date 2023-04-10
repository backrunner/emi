import type { HydratedChatMessage } from '@/global';
import { transformMessage } from '@/utils/message';
import type { AChatMessage } from '@any-design/anyui';
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useMessageStore = defineStore('messages', {
  state: () => ({
    messages: reactive<AChatMessage[]>([]),
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
