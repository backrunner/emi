<template>
  <div class="dialog-title">
    <div class="dialog-title__character">
      <div class="character-avatar"></div>
      <div class="character-name">Emi</div>
      <div class="character-status"></div>
    </div>
    <div class="dialog-title__action">
      <div class="action-more">
        <i-fluent-more-horizontal-24-regular class="action-more__icon" />
      </div>
      <a-button type="gradient" round @click="handleRefreshClicked">
        <i-fa-refresh />
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleRefreshClicked = () => {}
</script>

<style lang="scss" scoped>
.dialog-title {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  background-color: var(--bg);
  border-radius: 28px;
  box-shadow: -1px 2px 16px var(--shadow-6);
  padding: 6px 12px 6px 6px;
  box-sizing: border-box;

  &__character {
    display: flex;
    align-items: center;
    flex: 1;

    .character-avatar {
      width: 42px;
      height: 42px;
      border-radius: 28px;
      border: 3px solid #fff;
      box-shadow: 0px 0px 4px var(--shadow-8);
      background: center/cover url('@/assets/avatar/emi.png') no-repeat;
      margin-right: 10px;
    }

    .character-name {
      color: var(--text-primary);
      font-weight: 800;
      font-size: 18px;
      letter-spacing: 0.02rem;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.06);
    }

    .character-status {
      width: 6px;
      height: 6px;
      background-color: var(--success);
      margin-left: 10px;
      border-radius: 3px;
    }
  }

  &__action {
    display: flex;
    align-items: center;

    .action-more {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;

      &__icon {
        color: var(--text-primary);
        opacity: 0.8;
        margin-right: 8px;
        font-size: 20px;
      }
    }

    .a-button {
      width: 32px;
      height: 32px;
      font-size: 10px;
      padding: 0;
      border-radius: 20px;
      box-shadow: 0px 0px 6px var(--shadow-10);
    }
  }
}
</style>
