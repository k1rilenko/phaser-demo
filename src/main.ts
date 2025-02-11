import Phaser from 'phaser';
import Level from './scenes/Level';
import Preload from './scenes/Preload';
import TitleScreen from './scenes/TitleScreen.ts';

class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.pack('pack', 'assets/preload-asset-pack.json');
  }

  create() {
    this.scene.start('Preload');
  }
}

window.addEventListener('load', function () {
  const game = new Phaser.Game({
    width: 1280,
    height: 720,
    backgroundColor: '#2f2f2f',
    parent: 'game-container',
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT,
      autoCenter: Phaser.Scale.Center.CENTER_BOTH,
    },
    scene: [Boot, Preload, Level, TitleScreen],
    physics: {
      default: 'arcade',
      arcade: {
        debug: true,
        gravity: {
          x: 0,
          y: 0,
        },
      },
    },
  });

  game.scene.start('Boot');
});
