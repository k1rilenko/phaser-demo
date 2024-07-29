import Phaser from 'phaser';

new Phaser.Game({
  width: 600,
  height: 600,
  title: 'Phaser Demo Game',
  backgroundColor: '#000',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  pixelArt: true,
  version: '0.0.1',
});
