// You can write more code here

/* START OF COMPILED CODE */

import FoodPrefab from "../FoodPrefab";
import BurgerPrefab from "../BurgerPrefab";
import RockPrefab from "./RockPrefab";
/* START-USER-IMPORTS */
import ImageWithDynamicBody = Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

  constructor() {
    super("Level");

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

    // dino
    const dino = this.physics.add.image(602, 351, "FufuSuperDino");
    dino.scaleX = 0.75;
    dino.scaleY = 0.75;
    dino.body.collideWorldBounds = true;
    dino.body.setSize(250, 250, false);

    // guapen
    const guapen = new FoodPrefab(this, 996, 553);
    this.add.existing(guapen);

    // foodPrefab
    const foodPrefab = new FoodPrefab(this, 158, 647);
    this.add.existing(foodPrefab);

    // foodPrefab_1
    const foodPrefab_1 = new FoodPrefab(this, 195, 161);
    this.add.existing(foodPrefab_1);

    // ui
    const ui = this.add.layer();
    ui.blendMode = Phaser.BlendModes.SKIP_CHECK;

    // scoreText
    const scoreText = this.add.text(10, 10, "", {});
    scoreText.text = "Score: 0 ";
    scoreText.setStyle({ "fontSize": "64px" });
    ui.add(scoreText);

    // burgerPrefab
    const burgerPrefab = new BurgerPrefab(this, 639, 118);
    this.add.existing(burgerPrefab);

    // rockPrefab
    const rockPrefab = new RockPrefab(this, 336, 517);
    this.add.existing(rockPrefab);

    // rockPrefab_1
    const rockPrefab_1 = new RockPrefab(this, 336, 169);
    this.add.existing(rockPrefab_1);

    // rockPrefab_2
    const rockPrefab_2 = new RockPrefab(this, 859, 512);
    this.add.existing(rockPrefab_2);

    // rockPrefab_3
    const rockPrefab_3 = new RockPrefab(this, 859, 175);
    this.add.existing(rockPrefab_3);

    // lists
    const eatList = [guapen, foodPrefab_1, foodPrefab, burgerPrefab];
    const walls = [rockPrefab, rockPrefab_3, rockPrefab_2, rockPrefab_1];

    // eat_collider
    this.physics.add.overlap(dino, eatList,  this.eatFruit, undefined, this);

    // walls_collider
    this.physics.add.collider(dino, walls);

    this.dino = dino;
    this.guapen = guapen;
    this.scoreText = scoreText;
    this.upKey = upKey;
    this.downKey = downKey;
    this.leftKey = leftKey;
    this.rightKey = rightKey;
    this.eatList = eatList;
    this.walls = walls;

    this.events.emit("scene-awake");
  }

  private dino!: Phaser.Physics.Arcade.Image;
  private guapen!: FoodPrefab;
  private scoreText!: Phaser.GameObjects.Text;
  private upKey!: Phaser.Input.Keyboard.Key;
  private downKey!: Phaser.Input.Keyboard.Key;
  private leftKey!: Phaser.Input.Keyboard.Key;
  private rightKey!: Phaser.Input.Keyboard.Key;
  private eatList!: Array<FoodPrefab|BurgerPrefab>;
  private walls!: RockPrefab[];

  /* START-USER-CODE */

  // Write your code here
  private scoreValue = 0;

  create() {
    this.editorCreate();

    this.dino.on('pointerdown', () => {
      // LISTENER
    });
  }

  update() {
    const VELOCITY = 200;

    if (this.upKey.isDown) {
      this.dino.setVelocityY(-VELOCITY);
    } else if (this.downKey.isDown) {
      this.dino.setVelocityY(VELOCITY);
    } else {
      this.dino.setVelocityY(0);
    }
    if (this.leftKey.isDown) {
      this.dino.setVelocityX(-VELOCITY);
    } else if (this.rightKey.isDown) {
      this.dino.setVelocityX(VELOCITY);
    } else {
      this.dino.setVelocityX(0);
    }
  }

  eatFruit(_dino: ImageWithDynamicBody, food: FoodPrefab) {
    food.disableBody();
    food.destroy();
    this.scoreValue += 1;
    this.scoreText.setText(`Score: ${this.scoreValue}`);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
