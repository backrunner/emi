<template>
  <div class="dialog-main">
    <div class="dialog-main__list"></div>
    <div class="dialog-main__input">
      <a-input round>
        <template #postfix>
          <a-button type="gradient" round>
            <i-mingcute-send-plane-fill />
          </a-button>
        </template>
      </a-input>
    </div>
  </div>
</template>

<script setup lang="ts">
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

  &__list {
    flex: 1;
  }

  &__input {
    width: 100%;
  }
}
</style>
