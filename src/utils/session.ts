import { useMessageStore } from '@/store/message';

export const initSessionMessages = async () => {
  // init chat messages
  try {
    const messages = await window.native?.getCurrentMessages();
    const messageStore = useMessageStore();
    if (!messages) {
      console.error('Empty messages in native.');
      return;
    }
    messageStore.setMessages(messages);
  } catch (err) {
    console.error('Failed to get current messages:', err);
  }
};

export const startNewSession = async () => {
  try {
    await window.native?.createSession();
  } catch (err) {
    console.error('Failed to create session:', err);
  }
};
