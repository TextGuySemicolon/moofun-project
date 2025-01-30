import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()], // Add the Vue plugin here
    root: './src',
    build: {
        outDir: '../dist',
    },
    server: {
        open: true,
    },
});
