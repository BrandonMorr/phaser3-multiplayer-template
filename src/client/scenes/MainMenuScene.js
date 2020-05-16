import Phaser from 'phaser';
import SocketIO from 'socket.io-client';

export default class MainMenuScene extends Phaser.Scene {

  constructor() {
    super({
      key: 'MainMenuScene',
    });
  }

  preload() {

  }

  create() {
    this.socket = new SocketIO();
    this.camera = this.cameras.main;

    this.socket.on('welcome', () => {
      this.add.text(this.camera.centerX, this.camera.centerY, 'Greetings Smithers...').setOrigin(0.5);
    });
  }

  update() {

  }
}
