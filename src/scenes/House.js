import * as Phaser from 'phaser';

export default class House extends Phaser.Scene {

  constructor() {
    super({ key: 'House' });

    this.platforms;
    this.keyCoordX = 100;
    this.keyCoordY = 100;
    this.key;
    this.haveKey = JSON.parse(localStorage.getItem('haveKey')) || false;
    this.player;
  }

  preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png')
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 48, frameHeight: 42 });
    this.load.spritesheet('dog', 'assets/dog sprite sheet final vr.png', { frameWidth: 52, frameHeight: 40 });
    this.load.image('house background', 'assets/house background.png');
    this.load.image('key', 'assets/key 2.png');

  }

  create() {
    this.scale.displaySize.setAspectRatio(16 / 8);
    this.scale.refresh();
    //this.add.image(400, 200, 'sky');

    var bg = this.add.image(400, 250, 'house background');
    bg.setDisplaySize(800, 650);

    this.platforms = this.physics.add.staticGroup();

    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');

    this.key = this.add.image(this.keyCoordX, this.keyCoordY, 'key');
    this.key.setDisplaySize(50, 50);

    //player
    this.player = this.physics.add.sprite(100, 450, 'dog');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dog', { start: 4, end: 6 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dog', frame: 2 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dog', { start: 7, end: 9 }),
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
    /*this.input.once('pointerdown', function() {
      console.log('From House to Forest');
      this.scene.start('Forest');
    }, this);*/
  }

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

      if ((this.player.x < this.keyCoordX + 50 && this.player.x > this.keyCoordX - 20) && (this.player.y < this.keyCoordY + 30 && this.player.y > this.keyCoordY - 10)) {
        this.key.destroy();
        this.haveKey = true;
        localStorage.setItem('haveKey', this.haveKey);
      }

      if ((this.player.x < 450 && this.player.x > 350) && (this.player.y < 450 && this.player.y > 370) && this.haveKey == true) {
        this.player.destroy();
        this.scene.start('Forest');
      }

      /* old jump - not needed anymore
      if (cursors.up.isDown){
          this.player.setVelocityY(-330);
      }
      */
    }
  }
}
