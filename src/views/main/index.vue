<template>
  <div class="main">
    <div class="dialog-area">
      <DialogTitle />
      <DialogMain />
    </div>
  </div>
</template>

<script setup lang="ts">
import DialogTitle from './components/DialogTitle.vue';
import DialogMain from './components/DialogMain.vue';

const completeChat = (message: string) => {};
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 12px;
  box-sizing: border-box;

  .dialog-area {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #FFFCF1;
    border-radius: 32px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.12);
    padding: 12px;
    box-sizing: border-box;
    -webkit-app-region: drag;

    div {
      -webkit-app-region: none;
    }
  }
}
</style>
