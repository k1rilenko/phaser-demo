// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import Phaser from 'phaser';
/* END-USER-IMPORTS */

export default class TitleScreen extends Phaser.Scene {
  constructor() {
    super('TitleScreen');

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // title
    const title = this.add.text(657.5, 360, '', {});
    title.setOrigin(0.5, 0.5);
    title.text = 'Hungry Dino';
    title.setStyle({ fontSize: '64px' });

    this.events.emit('scene-awake');
  }

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();
    this.input.once(Phaser.Input.Events.POINTER_DOWN, () => {
      this.scene.start('Level');
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
