/* This is a template for a new scene. When you want to create a new scene, do this:
 *
 * 1. Make a copy of this file and name it the name of your scene, like MyScene.js
 *
 * 2. Replace MyScene on lines 16 and 18 of this file with the real name of your scene
 *    (whatever you named the file)
 *
 * 3. Paste this line at the top of game.ts:
 *
 *      import MyScene from './scenes/MyScene.js';
 *
 * 4. Add MyScene to the list of scenes on line 23-ish of game.ts
 *
 * Then you can delete this comment.
 */

import * as Phaser from 'phaser';

export default class SpawnIn extends Phaser.Scene {

  constructor() {
    super({ key: 'SpawnIn' });
    this.keyCoordX = 100;
    this.keyCoordY = 100;
    this.player;
    this.previousX = Json.parse(localStorage.getItem('previousX'));

    /* Define or initialize any variable you want to use in MORE THAN ONE method here.
     * For example, if you want to use player and haveKey in both the create() and update() methods:
     *
     *  this.player;
     *  this.haveKey = false;
     *
     */
  }

  preload() {
    this.load.spritesheet('dog', 'assets/dog sprite sheet final vr.png', { frameWidth: 52, frameHeight: 40 });
    this.load.image('house and forest transition scene', 'assets/house and forest transition scene.png');
  }

  create() {
    this.scale.displaySize.setAspectRatio(16 / 8);
    this.scale.refresh();
    //this.add.image(400, 200, 'sky');

    var bg = this.add.image(400, 300, 'house and forest transition scene');
    bg.setDisplaySize(800, 650);

    //player
    if (this.previousX != null){
      this.player = this.physics.add.sprite(this.previousX, 300, 'dog');
    }
    else{
      this.player = this.physics.add.sprite(100, 300, 'dog');
    }

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.setDisplaySize(100, 100);

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
    }

    if ((this.player.x < 550 && this.player.x > 450) && (this.player.y < 75 && this.player.y > 0)) {
      this.player.destroy();
        localStorage.setItem('previousX', this.player.x);
        console.log('From SpawnIn to House');
        this.scene.start('House');
      }


    if ((this.player.y > 325)){
      console.log (this.player.y);

      this.player.destroy();
        localStorage.setItem('previousX', this.player.x);
        console.log('From SpawnIn to Forest');
        this.scene.start('Forest');

    }

  }
}

