<template>
  <div class="dialog-main">
    <div class="dialog-main__list">
      <a-chat :messages="messages" />
    </div>
    <div class="dialog-main__input">
      <a-textarea v-model="userInput" placeholder="请输入您想说的内容..." :minRows="1" :maxRows="9" borderless autoMatchHeight disableResizeCorner>
        <template #after>
          <div class="dialog-main__send">
            <a-button type="gradient" round @click="handleSendClicked">
              <i-mingcute-send-plane-fill />
            </a-button>
          </div>
        </template>
      </a-textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from 'nanoid';
import { ref, computed } from 'vue';

import { useMessageStore } from '@/store/message';
import { completeChat } from '@/utils/chat';

const messageStore = useMessageStore();

const userInput = ref();

const messages = computed(() => messageStore.messages);

let messageSending = ref(false);

const handleSendClicked = async () => {
  if (!userInput.value) {
    return;
  }
  const trimmedInput = userInput.value.trim();
  // add this message to the store
  messageStore.pushMessage({
    id: nanoid(),
    content: trimmedInput,
    role: 'self',
  });
  messageSending.value = true;
  userInput.value = '';
  // send complete request
  try {
    const resMessage = await completeChat(trimmedInput);
    if (resMessage) {
      messageStore.addMessage(resMessage);
    }
  } catch (err) {
    console.error('Failed to complete the chat:', err);
  } finally {
    // do unlock
    messageSending.value = false;
  }
};
</script>

<style lang="scss" scoped>
.dialog-main {
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--bg);
  margin-top: 12px;
  border-radius: 28px;
  box-shadow: 1px 2px 20px var(--shadow-6);
  padding: 12px 0;
  box-sizing: border-box;

  &__list {
    flex: 1;
    margin-bottom: 12px;
    width: 100%;

    .a-chat {
      :deep(.a-chat__message) {
        .a-chat__content {
          border-radius: 16px;
          padding: 12px 16px;
        }
      }
    }
  }

  &__input {
    width: 100%;
    padding: 0 12px;
    box-sizing: border-box;

    .a-textarea {
      position: relative;

      :deep(.a-textarea__inner) {
        box-shadow: 1px 3px 14px rgba(52, 46, 46, 0.06);
        transition: box-shadow 300ms ease;
        border-radius: 18px;
        padding-right: 42px;
      }

      :deep(.a-textarea__inner):focus {
        box-shadow: 1px 3px 14px var(--primary-12);
      }

      .dialog-main__send {
        width: 32px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 2px;
        border-radius: 12px;
        display: flex;
        align-items: flex-end;
        padding-bottom: 8px;
        box-sizing: border-box;

        .a-button {
          width: 28px;
          height: 28px;
          border-radius: 16px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 1px 1px 4px var(--shadow-6);
          transition: filter 300ms ease;

          svg {
            width: 1.125em;
            height: 1.125em;
          }
        }
      }
    }
  }
}
</style>
