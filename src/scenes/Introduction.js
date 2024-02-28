import * as Phaser from 'phaser';

export default class Introduction extends Phaser.Scene {

  constructor() {
    super('bootGame', { key: 'Introduction' });
  }

  preload() {
    this.load.image('introBackground', 'assets/introCityBackground.png');
  }

  create() {
    this.scale.displaySize.setAspectRatio(2 / 1);
    this.scale.refresh();
    var bg = this.add.image(400, 200, 'introBackground');
    bg.setDisplaySize(800, 400);
    var score = 0;
    var scoreText;
    scoreText = this.add.text(10, 16, '\n  Welcome to a world where dogs reign...\n               Doglandia \n     But as you explore this cabin \n         in the woods, be alert, \n  for something is amiss in the forest.', { fontSize: '32px', fill: '#000' });

    this.input.once('pointerdown', function() {
      console.log('From Introduction to House');
      this.scene.start('House');
    }, this);
  }

  update() {
    var cursors = this.input.keyboard.createCursorKeys();
  }
}
