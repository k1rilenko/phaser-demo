// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface BurgerPrefab {
  body: Phaser.Physics.Arcade.Body;
}

export default class BurgerPrefab extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
    super(scene, x ?? 0, y ?? 0, texture || 'burger_spritesheet', frame ?? 6);

    this.scaleX = 3;
    this.scaleY = 3;
    scene.physics.add.existing(this, false);
    this.body.setSize(32, 32, false);

    /* START-USER-CTR-CODE */
    this.play('idleburger_spritesheet_1');
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */

  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
