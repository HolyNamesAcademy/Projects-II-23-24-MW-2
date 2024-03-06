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

export default class MyScene extends Phaser.Scene {

  constructor() {
    super({ key: 'MyScene' });

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
     *
     * this.load.image('sky', 'assets/sky.png');
     *
     */
  }

  create() {

  }

  update() {

  }
}
