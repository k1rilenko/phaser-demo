// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface FoodPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class FoodPrefab extends Phaser.Physics.Arcade.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "guapen", frame);

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, 208, 240), Phaser.Geom.Rectangle.Contains);
		this.scaleX = 0.4;
		this.scaleY = 0.4;
		this.tintTopLeft = 14797514;
		this.tintTopRight = 10043551;
		this.tintBottomLeft = 4338914;
		this.tintBottomRight = 15274771;
		scene.physics.add.existing(this, false);
		this.body.setSize(208, 240, false);

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
