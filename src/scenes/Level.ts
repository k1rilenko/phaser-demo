// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {
  constructor() {
    super('Level');

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // upKey
    const upKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

    // downKey
    const downKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

    // leftKey
    const leftKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

    // rightKey
    const rightKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    // text
    const text = this.add.text(640, 458, '', {});
    text.setOrigin(0.5, 0.5);
    text.text = 'Phaser 3 + Phaser Editor v4\nVite + TypeScript';
    text.setStyle({ align: 'center', fontFamily: 'Arial', fontSize: '3em' });

    // dino
    const dino = this.add.image(127, 125, 'FufuSuperDino');
    dino.setInteractive(new Phaser.Geom.Rectangle(0, 0, 250, 250), Phaser.Geom.Rectangle.Contains);

    // guapen
    const guapen = this.add.image(576, 155, 'guapen');
    guapen.setInteractive(new Phaser.Geom.Rectangle(0, 0, 208, 240), Phaser.Geom.Rectangle.Contains);

    this.text = text;
    this.dino = dino;
    this.guapen = guapen;
    this.upKey = upKey;
    this.downKey = downKey;
    this.leftKey = leftKey;
    this.rightKey = rightKey;

    this.events.emit('scene-awake');
  }

  private text!: Phaser.GameObjects.Text;
  private dino!: Phaser.GameObjects.Image;
  private guapen!: Phaser.GameObjects.Image;
  private upKey!: Phaser.Input.Keyboard.Key;
  private downKey!: Phaser.Input.Keyboard.Key;
  private leftKey!: Phaser.Input.Keyboard.Key;
  private rightKey!: Phaser.Input.Keyboard.Key;

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();

    this.dino.on('pointerdown', () => {
      this.text.text = 'Hello World!';
    });
  }

  update() {
    if (this.upKey.isDown) {
      this.dino.y -= 4;
    } else if (this.downKey.isDown) {
      this.dino.y += 4;
    } else if (this.leftKey.isDown) {
      this.dino.x -= 4;
    } else if (this.rightKey.isDown) {
      this.dino.x += 4;
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
