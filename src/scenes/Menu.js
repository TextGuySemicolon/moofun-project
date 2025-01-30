
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Menu extends Phaser.Scene {

	constructor() {
		super("Menu");

		/* START-USER-CTR-CODE */
		// Write your code here.

		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */
	preload() {
		console.log("menu:preload");

		// When you're ready to switch to menu, dispatch a custom event
		window.dispatchEvent(new CustomEvent('phaser-scene-change', {
			detail: { scene: 'Menu' }
		}));
	}

	// Write more your code here
	create() {
		this.editorCreate();

		this.background = this.add.image(0,0,"menu-background");

		this.cow = this.add.spine(0, 0, "Cow", "Cow-atlas")
		this.cow.animationState.setAnimation(0, "Idle", true);

		this.resize();
	}

	resize()
	{
		const x = this.game.scale.width;
		const y = this.game.scale.height;

		// intro
		// Ensure the image scales proportionally to cover the entire screen
		const backgroundX = x / 375; // Scale based on width
		const backgroundY = y / 812; // Scale based on height

		// Choose the larger scale to ensure the image fully covers the screen
		const backgroundScale = Math.max(backgroundX, backgroundY);

		// Update the intro image position, scale, and origin
		this.background.x = x / 2;
		this.background.y = y;
		this.background.setScale(backgroundScale); // Apply the uniform scale
		this.background.setOrigin(0.5, 1); // Center the image

		// Ensure the image scales proportionally to cover the entire screen
		const cowX = x / 601; // Scale based on width
		const cowY = y / 941; // Scale based on height

		// Calculate cowScale
		let cowScale = cowY * 0.82 - cowX * 0.42;

		// Clamp cowScale to be no more than cowX * 0.7
		cowScale = Phaser.Math.Clamp(cowScale, 0, cowX * 0.5);

		// Update the intro image position, scale, and origin
		this.cow.x = x / 2;
		this.cow.y = y - y * 0.19;
		this.cow.setScale(cowScale); // Apply the uniform scale
		this.cow.setOrigin(0.5, 0.5); // Center the image
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
