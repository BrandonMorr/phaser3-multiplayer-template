import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import MainMenuScene from './scenes/MainMenuScene';

const config = {
  title:    'Phaser 3 Multiplayer Game',
  version:  '0.0.1',
  parent:   'game',
  type:     Phaser.AUTO,
  input: {
    keyboard: true,
    mouse:    true,
    touch:    true,
    gamepad:  false,
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: window.innerWidth,
    height: window.innerHeight
  },
  render: {
    pixelArt:   true,
    antialias:  true,
  },
  backgroundColor: '0x000000',
  dom: {
    createContainer: true,
  },
  scene: [ MainMenuScene, GameScene ],
};

new Phaser.Game(config);
