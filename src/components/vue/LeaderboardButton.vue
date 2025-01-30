<template>
    <button class="rounded-button">
        <div class="icon"></div>
    </button>
</template>

<script>
export default {

};
</script>

<style scoped>
.rounded-button {
    width: calc(var(--base-unit) * 64);
    height: calc(var(--base-unit) * 48);
    background: #B38FFD;
    border: none;
    border-radius: 0px calc(var(--base-unit) * 12) calc(var(--base-unit) * 12) 0px;
    box-shadow: 0px calc(var(--base-unit) * 5) calc(var(--base-unit) * 1) #AB29E3, 0px calc(var(--base-unit) * -5) 0 #E0C1F3;
    transition: transform 0.15s ease-out;

    bottom: calc(var(--base-unit) * 120);
    left: 0px;
    position: absolute;
}

/* Scale up when pressed */
.rounded-button:active {
    transform: scale(1.1);
}

/* Icon styling */
.icon {
  position: relative;
  top: calc(var(--base-unit) * -33);
  left: 50%;
  transform: translateX(-50%);
  width: calc(var(--base-unit) * 64);
  height: calc(var(--base-unit) * 64);
  background: url('../assets/icon/reward.png') center/cover no-repeat;
  filter: drop-shadow(0 calc(var(--base-unit) * 4) calc(var(--base-unit) * 4) rgba(0, 0, 0, 0.33));
  transition: transform 0.15s ease-out;
}

/* Move icon up when button is pressed */
.rounded-button:active .icon {
    transform: translateX(-50%) translateY(-10%);
}
</style>
