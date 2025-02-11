
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface RockPrefab {

   body: Phaser.Physics.Arcade.Body;
}

export default class RockPrefab extends Phaser.Physics.Arcade.Image {

  constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
    super(scene, x ?? 0, y ?? 0, texture || "tile_0001", frame);

    this.scaleX = 5;
    this.scaleY = 5;
    scene.physics.add.existing(this, false);
    this.body.pushable = false;
    this.body.immovable = true;
    this.body.setSize(18, 18, false);

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
