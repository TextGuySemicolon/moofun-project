
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

		// intro
		this.add.image(329, 794, "intro");

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

		addVersionText(this);

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	progressBar;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorPreload();
	}

	create() {
		this.editorCreate();

		const width =  this.progressBar.width;

		this.load.on("progress", (progress) => {
			this.progressBar.width = progress * width;
		});

		// Add a 1-second delay before starting the "Level" scene
		this.time.delayedCall(1000, () => {
			this.scene.start("Level");
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
