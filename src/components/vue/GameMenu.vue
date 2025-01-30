<template>
    <div class="game-menu">
      <div 
        class="menu-item" 
        v-for="item in menuItems" 
        :key="item.id"
        :class="{ selected: item.id === selectedId }" 
        @click="selectMenuItem(item.id)"
      >
        <div class="icon-container">
          <img :src="item.icon" :alt="item.name" />
          <p v-if="item.id === selectedId" class="item-text">{{ item.name }}</p> <!-- Display text when selected -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { id: 1, name: 'Home', icon: '../assets/icon/home.png' },
          { id: 2, name: 'Chest', icon: '../assets/icon/chest.png' },
          { id: 3, name: 'Wheel', icon: '../assets/icon/wheel.png' },
          { id: 4, name: 'Invite', icon: '../assets/icon/invite.png' },
          { id: 5, name: 'Profile', icon: '../assets/icon/profile.png' }
        ],
        selectedId: null  // Store the selected item ID
      };
    },
    methods: {
      selectMenuItem(id) {
        this.selectedId = id;  // Update the selected item ID
      }
    }
  };
  </script>

<style scoped>
.game-menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: calc(var(--base-unit) * 76);
  bottom: 0;
  position: absolute;

  /* Add borders on top and bottom */
  border-top: calc(var(--base-unit) * 1) solid #222835;
  border-bottom: calc(var(--base-unit) * 1) solid #222835;
}

.menu-item {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #374056;
  display: flex;
  align-items: start;
  justify-content: center;
  position: relative; /* Ensure proper positioning for icon and text */
  overflow: visible; /* Allow overflow to show outside */
}

/* Selected item will turn red with gradient background */
.menu-item.selected {
  background: linear-gradient(to bottom, 
    #374056 0%, 
    #46516D 28%, 
    #374056 52%, 
    #46516D 85%);
}

/* Icon container to handle icon and text */
.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-out;
}

/* Move icon up when selected */
.menu-item.selected .icon-container {
  transform: translateY(calc(var(--base-unit) * -32));
}

/* Icon styling */
.menu-item img {
  width: calc(var(--base-unit) * 58);
  height: calc(var(--base-unit) * 58);
  object-fit: cover;
  transition: transform 0.2s ease-out;
}

/* Text styling */
.item-text {
  color: #fff; /* White text */
  text-align: center;
  margin-top: calc(var(--base-unit) * 4); /* Space between icon and text */
}
</style>