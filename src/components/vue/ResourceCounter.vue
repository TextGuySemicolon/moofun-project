<!-- ResourceCounter.vue -->
<template>
    <div class="resource-counter">
        <div class="icon">
        <img :src="icon" alt="resource icon" />
        </div>
        <span class="value">{{ formattedValue }}</span>
    </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
name: 'ResourceCounter',
props: {
    icon: {
    type: String,
    required: true
    },
    value: {
    type: Number,
    default: 0
    }
},
setup(props) {
    const formattedValue = computed(() => {
    return props.value.toLocaleString()
    })

    return {
    formattedValue
    }
}
})
</script>

<style scoped>
.resource-counter {
display: flex;
align-items: center;
background-color: rgba(0, 0, 0, 0.8);
border-radius: calc(var(--base-unit) * 8); 
padding: calc(var(--base-unit) * 6) calc(var(--base-unit) * 8);
gap: calc(var(--base-unit) * 4);
width: 100%;
}

.icon {
width: calc(var(--base-unit) * 20); 
height: calc(var(--base-unit) * 20); 
}

.icon img {
width: 100%;
height: 100%;
object-fit: contain;
}

.value {
  flex-grow: 1; /* Take up all remaining space */
  text-align: center; /* Center text within this space */
  color: white;
  font-weight: bold;
  font-size: calc(var(--base-unit) * 8); 
}
</style>

<!-- Usage example:
<template>
<ResourceCounter 
    :icon="'/path/to/coin-icon.png'"
    :value="323571234" 
/>
</template>
-->