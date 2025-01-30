import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@3.2.37/dist/vue.esm-browser.js';
import App from './App.vue';
import Menu from "./scenes/Menu.js";
import Preload from "./scenes/Preload.js";
import { SpinePlugin } from "@esotericsoftware/spine-phaser";


window.addEventListener('load', async  function () {

	// Initialize Vue
	const app = createApp(App);
	app.mount('#app');

	// Initialize Phaser
	const config = {
		type: Phaser.AUTO,
		parent: 'game-container',
		width: window.innerWidth,
    	height: window.innerHeight,
        backgroundColor: "#000000",
		scale: {
			mode: Phaser.Scale.RESIZE,
			autoCenter: Phaser.Scale.Center
		},
		plugins: {
			scene: [{
				key: "spine.SpinePlugin",
				plugin: SpinePlugin,
				mapping: "spine"
			}]
		},
	}

	

	const game = new Phaser.Game(config);

	game.scene.add("Menu", Menu);
	game.scene.add("Preload", Preload, true);

	const onChangeScreen = () => {
		game.scale.resize(window.innerWidth, window.innerHeight);
		
		const activeScene = game.scene.getScenes(true)[0]; // Get the currently active scene
		if (activeScene && (activeScene instanceof Menu || activeScene instanceof Preload)) {
			activeScene.resize();
		}
	}

	const _orientation = screen.orientation;
	_orientation.addEventListener('change', () => {
		onChangeScreen();
	});

	window.addEventListener('resize', () => {
		onChangeScreen();
	});
});

