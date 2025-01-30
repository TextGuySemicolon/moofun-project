
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { addVersionText } from "../utils/myUtils.js"; // Import the utility function
/* END-USER-IMPORTS */

export default class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.


		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progressBar
		const progressBar = this.add.rectangle(127, 1625, 0, 20);
		progressBar.scaleX = 3;
		progressBar.scaleY = 2;
		progressBar.setOrigin(0, 0.5);
		progressBar.isFilled = true;
		progressBar.fillColor = 15181860;

		// progressBarBg
		const progressBarBg = this.add.rectangle(381, 1625, 256, 20);
		progressBarBg.scaleX = 3;
		progressBarBg.scaleY = 2;
		progressBarBg.isFilled = true;
		progressBarBg.fillColor = 0;
		progressBarBg.isStroked = true;
		progressBarBg.strokeColor = 3222112;
		progressBarBg.lineWidth = 2;

		this.progressBar = progressBar;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	progressBar;

	/* START-USER-CODE */

	preload() {
		this.editorPreload();

		// When you're ready to switch to preload, dispatch a custom event
		window.dispatchEvent(new CustomEvent('phaser-scene-change', {
			detail: { scene: 'Preload' }
		}));
	}
	// Write your code here
	create() {
		this.intro = this.add.image(0,0,"intro");
		this.resize();

		this.editorCreate();
		addVersionText(this);

		// Add a 1-second delay before starting the "Menu" scene
        this.time.delayedCall(5000, () => {
            this.scene.start("Menu");
			console.log("load scene Menu");
        });
	}

	resize()
	{
		console.log("resize preload");

		const x = this.game.scale.width;
		const y = this.game.scale.height;

		// intro
		// Ensure the image scales proportionally to cover the entire screen
		const scaleX = x / 1080; // Scale based on width
		const scaleY = y / 1920; // Scale based on height

		// Choose the larger scale to ensure the image fully covers the screen
		const scale = Math.max(scaleX, scaleY);

		// Update the intro image position, scale, and origin
		this.intro.x = x / 2;
		this.intro.y = 0;
		this.intro.setScale(scale); // Apply the uniform scale
		this.intro.setOrigin(0.5, 0); // Center the image
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
