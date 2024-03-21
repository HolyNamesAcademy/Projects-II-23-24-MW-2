import * as Phaser from 'phaser';

export default class Forest extends Phaser.Scene {

  constructor() {
    super({ key: 'Forest' });
     this.player;
     this.platforms;
     this.dude;
     this.dude2;
     this.counter;
     this.npcState1;
     this.npcState2;

  }
  preload() {
    /* load any images or spritesheets here, for example:
     */
     this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 30, frameHeight: 48 });
    this.load.spritesheet('dog', 'assets/dog sprite sheet final vr.png', { frameWidth: 52, frameHeight: 40 });
     this.load.image('forest', 'assets/forest.png');
    this.load.image('key', 'assets/key 2.png');

         };

 create() {


    this.npcState1 = 0;
    this.npcState2 = 0;
    this.scale.displaySize.setAspectRatio(16 / 8);
    this.scale.refresh();
    //this.add.image(400, 200, 'sky');

    var bg = this.add.image(400, 250, 'forest');
    bg.setDisplaySize(800, 650);

    /*
    this.platforms = this.physics.add.staticGroup();

    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();


    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');
    */

    this.counter = 0;

    this.key = this.add.image(this.keyCoordX, this.keyCoordY, 'key');
    this.key.setDisplaySize(50, 50);

    //player
    this.player = this.physics.add.sprite(100, 450, 'dog');
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

    //dude npcs
    this.dude = this.physics.add.sprite(200, 400, 'dog');
    this.dude = this.dude.setCollideWorldBounds(true);
    this.dude2 = this.physics.add.sprite(350, 200, 'dog');
    this.dude2 = this.dude.setCollideWorldBounds(true);

    this.anims.create({
      key: 'Dleft',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
        key: 'Dturn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'Dright',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
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

    if(this.counter < 120){
        this.counter ++;
    }
    else{
      this.counter = 0;
      this.npcState1 = Math.random() * (3 - 1) + 1;
      this.npcState2 = Math.random() * (3-1) + 1;
    }


    

    //random npc movement
    if(this.npcState1 > 1 && this.npcState1 < 2){
      this.dude.setVelocityX(-50);
      this.dude.anims.play('left', true);
    }  
    if(this.npcState1 > 2 && this.npcState1 < 3){
      this.dude.setVelocityX(50);
      this.dude.anims.play('right', true);
    }
    /*
    if(this.npcState2 > 1 && this.npcState2 < 2){
      this.dude2.setVelocityY(-50);
      this.dude2.anims.play('up', true);
    }  
    if(this.npcState2 > 2 && this.npcState2 < 3){
      this.dude2.setVelocityY(50);
      this.dude2.anims.play('down', true);
    }
    */
  }

}


