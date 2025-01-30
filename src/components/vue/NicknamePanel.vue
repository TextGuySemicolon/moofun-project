# NicknamePanel.vue
<template>
  <div class="nickname-container">
    <!-- Pink square with skull -->
    <div class="icon-box">
      <div class="icon-inner">
        <img :src="skullIcon" alt="Skull Icon" class="skull-icon">
      </div>
    </div>
    
    <!-- Yellow banner with black outline -->
    <div class="name-banner">
      <div class="name-content body-text">{{ nickname }}</div>
    </div>
  </div>
</template>

<script>
import profileIcon from '../../assets/icon/profile-box.svg';

export default {
  name: 'NicknamePanel',
  data() {
    return {
      nickname: 'Hisashi',
      skullIcon: profileIcon
    }
  }
}
</script>

<style scoped>
.nickname-container {
    width: calc(var(--base-unit) * 143);  /* 143px in design */
    height: calc(var(--base-unit) * 48);   /* 48px in design */
    display: flex;
    align-items: center;
    gap: 0;
}

.icon-box {
    width: calc(var(--base-unit) * 46);    /* 46px in design */
    height: calc(var(--base-unit) * 46);
    background: #F8DE2C;
    border-radius: calc(var(--base-unit) * 4);
    border: calc(var(--base-unit) * 1) solid #000;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-inner {
    width: calc(var(--base-unit) * 38);    /* 38px in design */
    height: calc(var(--base-unit) * 38);
    background: #FF88CC;
    border-radius: calc(var(--base-unit) * 4);
    margin: auto;
}

.skull-icon {
    width: 100%;
    height: 100%;
}

.name-banner {
    height: calc(var(--base-unit) * 26);   /* 26px in design */
    width: 100%;
    flex-grow: 1;
    background: linear-gradient(to right, #FF57B0, #F8DE2C);
    border-radius: 0 calc(var(--base-unit) * 12) calc(var(--base-unit) * 12) 0;
    position: relative;
}

.name-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>