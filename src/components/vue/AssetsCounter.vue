<!-- AssetsCounter.vue -->
<template>
    <div class="counter-container">
        <div class="label-container"><div class="label">Total PTS</div></div>
        <div class="value-container">
            <span class="title">{{ formattedAmount }}</span>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
    name: 'AssetsCounter',
    setup() {
        const amount = ref(1234324354654650);

        const formattedAmount = computed(() => {
            return amount.value.toLocaleString();
        });

        return {
            amount,
            formattedAmount
        };
    },
});
</script>

<style scoped>
.counter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: fit-content;
}

.label-container {
    background: linear-gradient(180deg, #FEB523 46%, #FD951F 100%);
    padding: calc(var(--base-unit) * 4) calc(var(--base-unit) * 14);
    border-radius: calc(var(--base-unit) * 4);
    position: relative;
    z-index: -1;
}

.value-container {
    background-color: #616881;
    border-radius: calc(var(--base-unit) * 8);
    padding: calc(var(--base-unit) * 14) calc(var(--base-unit) * 24);
    margin-top: calc(var(--base-unit) * -2);
    border: calc(var(--base-unit) * 1) solid #FFA500;
    border-image: linear-gradient(180deg, #FEB523 46%, #FD951F 100%) calc(var(--base-unit) * 1);
    box-shadow: 0 calc(var(--base-unit) * 2) calc(var(--base-unit) * 33) rgba(232, 168, 168, 0.33);  /* Main drop shadow from Figma */
}
</style>