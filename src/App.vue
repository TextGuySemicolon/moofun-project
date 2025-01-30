<template>
    <component :is="currentComponent"></component>
</template>
  
<script>
import '@fontsource/rammetto-one';
import EmptyComponent from "./components/EmptyComponent.vue";
import MenuComponent from "./components/MenuComponent.vue";

export default {
  data() {
    return {
      currentScene: "Preload", // Default scene
    };
  },
  computed: {
    currentComponent() {
      return this.currentScene === "Preload" ? EmptyComponent : MenuComponent;
    },
  },
  mounted() {
    // Add event listener when component is mounted
    window.addEventListener('phaser-scene-change', (event) => {
      this.currentScene = event.detail.scene;
    });
  },
  beforeDestroy() {
    // Remove event listener when component is destroyed
    window.removeEventListener('phaser-scene-change', (event) => {
      this.currentScene = event.detail.scene;
    });
  }
};
</script>

<style>
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* Vue overlays Phaser */
}
</style>
  