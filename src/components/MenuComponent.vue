<template>

  <div class="top-section">
    <div class="top">
      <NicknamePanel />
      <ConnectButton />
    </div>
  </div>

  <div class="resources">
    <ResourceCounter 
      :icon="'../../assets/icon/extra-life.svg'"
      :value="323534" 
    />
    <ResourceCounter 
      :icon="'../../assets/icon/generic-blueprint.svg'"
      :value="32234" 
    />
    <ResourceCounter 
      :icon="'../../assets/icon/gem.svg'"
      :value="371234" 
    />
  </div>

  <div class="assets-container">
    <AssetsCounter/>
  </div>

  <LeaderboardButton/>
  <ChestButton/>

  <GameMenu/>



</template>

<script>
import NicknamePanel from '../components/vue/NicknamePanel.vue'
import ConnectButton from '../components/vue/ConnectButton.vue'
import ResourceCounter from '../components/vue/ResourceCounter.vue'
import AssetsCounter from '../components/vue/AssetsCounter.vue'
import LeaderboardButton from './vue/LeaderboardButton.vue'
import ChestButton from '../components/vue/ChestButton.vue'
import GameMenu from '../components/vue/GameMenu.vue'

export default {
  name: "MenuComponent",
  components: {
    NicknamePanel,
    ConnectButton,
    ResourceCounter,
    AssetsCounter,
    LeaderboardButton,
    ChestButton,
    GameMenu
  },
};
</script>

<style scoped>
.top-section {
  height: calc(var(--base-unit) * 134); 
  background: linear-gradient(180deg,
      #000000ff 0%,
      #00000042 51%,
      #25276B00 100%
  );
}

.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - calc(var(--base-unit) * 32));
  height: calc(var(--base-unit) * 48); 
  padding: calc(var(--base-unit) * 16); 
  padding-top: calc(var(--base-unit) * 56); 
}

.resources {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - calc(var(--base-unit) * 32));
  padding-left: calc(var(--base-unit) * 16); 
  padding-right: calc(var(--base-unit) * 16); 
  gap: calc(var(--base-unit) * 8);
}

.assets-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: calc(var(--base-unit) * 20);
}


</style>