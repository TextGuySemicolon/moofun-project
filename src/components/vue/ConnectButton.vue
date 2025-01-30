# ConnectButton.vue
<template>
    <div>
        <button class="connect-button">
            <slot>Connect</slot>  <!-- This allows you to pass content into the button -->
        </button>
    </div>
</template>

<script>
export default {
name: 'ConnectButton'
}
</script>

<style scoped>
.connect-button {
    width: calc(var(--base-unit) * 163);
    height: calc(var(--base-unit) * 30);
    background-color: #FFAB01;
    border: calc(var(--base-unit) * 1) solid #0B0903;
    border-radius: calc(var(--base-unit) * 8);
    padding: calc(var(--base-unit) * 14) calc(var(--base-unit) * 6);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.15s ease-out;
}

/* Hover effect */
.connect-button:hover {
  opacity: 0.95;
}

/* Active/Click effect */
.connect-button:active {
  transform: scale(0.98);
}
</style>