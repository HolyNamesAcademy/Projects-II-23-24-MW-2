import * as Phaser from 'phaser';
import Introduction from './scenes/Introduction.js';
import House from './scenes/House.js';

const config = {
  scale: {
    mode: Phaser.Scale.FIT,
  },
  width: 800,
  height: 400,
  // scene: {
  //   preload: preload,
  //   create: create,
  //   update: update
  // },
  physics: {
    default: 'arcade',
    arcade: {
      //gravity: { y: 300 },
      debug: false
    }
  },
  scene: [Introduction, House],
};

const game = new Phaser.Game(config);
