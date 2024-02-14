import * as Phaser from 'phaser';

export default class Forest extends Phaser.Scene {

  constructor() {
    super({ key: 'Forest' });
     this.player;
     this.platforms;

    /* Define or initialize any variable you want to use in MORE THAN ONE method here.
     * For example, if you want to use player and haveKey in both the create() and update() methods:
     *
     *  this.player;
     *  this.haveKey = false;
     *
     */
  }
  preload() {
    /* load any images or spritesheets here, for example:
     */
     this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 48, frameHeight: 42 });
    this.load.spritesheet('dog', 'assets/dog sprite sheet final vr.png', { frameWidth: 52, frameHeight: 40 });
     this.load.image('sky', 'assets/sky.png');
         };

 create() {
     this.platforms = this.physics.add.staticGroup();

    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');
this.player = this.physics.add.sprite(100, 450, 'dog');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dog', { start: 4, end: 6 }),
      frameRate: 10,
      repeat: -1

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dog', frame: 2 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: anims.generateFrameNumbers('dog', { start: 7, end: 9 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('dog', { start: 10, end: 11 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('dog', { start: 2, end: 3 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('dog', { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1
    });
  }

  /*{this.input.once('pointerdown', function() {
      console.log('From House to Forest');
      this.scene.start('Forest');
    }, this);
  }*/

  update() {
   
    let cursors = this.input.keyboard.createCursorKeys();
    if (this.player) {
      if (cursors.left.isDown) {
        this.player.setVelocityX(-160);
        this.player.anims.play('left', true);
      } else if (cursors.right.isDown) {
        this.player.setVelocityX(160);
        this.player.anims.play('right', true);
      } else {
        this.player.setVelocityX(0);
        this.player.anims.play('idle', true);
      }

      if (cursors.up.isDown) {
        this.player.setVelocityY(-160);
        this.player.anims.play('up', true);
      } else if (cursors.down.isDown) {
        this.player.setVelocityY(160);
        this.player.anims.play('down', true);
      } else {
        //this.player.setVelocityX(0);
        this.player.setVelocityY(0);
        //this.player.anims.play('idle');
      }
    }
}
}
