import Phaser, { Input } from 'phaser';
import { IGrabbable } from '../types/interfaces';
import { CastToMario } from './MainScene.gen';

const NUM_MARIOS = 10;


export interface IMario extends IGrabbable {
  DoMarioThing(): void;
}

class Mario extends Phaser.GameObjects.Image implements IMario {
  DoMarioThing(): void {
    console.log('maarrrrio');
  }
  GetNumber(): number {
    return 123;
  }
  GetThing(): object | null {
    return this;
  }
}


export default class MainScene extends Phaser.Scene {
  private marios: Mario[] = [];

  preload = () => {
    this.load.image('mario', 'https://i.imgur.com/nKgMvuj.png');
    this.load.image('background', 'https://i.imgur.com/dzpw15B.jpg');
  };
  create = () => {
    this.add.text(0, 0, 'Main Scene - no physics', { color: '#fff', fontSize: '16px' });

    this.add.image(0, 0, 'background')
      .setOrigin(0, 0) // Anchor to top left so (0,0) is flush against the corner
      .setDisplaySize(1024, 768) // Fit background image to window
      .setDepth(-1); // Behind everything

    for (let i = 0; i < NUM_MARIOS; i++) {
      const mario = this.add.existing(new Mario(this, 32, 32, 'mario'))
        .setData('velocity', { x: Math.random() * 500, y: Math.random() * 500 })
        .setDisplaySize(32, 32);

      this.marios.push(mario);

      mario.setInteractive().on('pointerdown', () => {
        this.emitPointerDown(mario);
      });
    }
  };

  emitPointerDown = (emitter: unknown) => {
    const grabbable = CastToMario(emitter);
    if (!grabbable) { return; }
    console.log('clicked grabbable: ', grabbable.GetNumber());
  };

  update = (time: number, delta: number) => {
    // do something every tick here
    let mario;
    let velocity;
    for (let i = 0; i < this.marios.length; i++) {
      mario = this.marios[i];
      velocity = mario.getData('velocity') as { x: number; y: number; };

      // Move the thing
      mario.x += velocity.x * delta * 0.001;
      mario.y += velocity.y * delta * 0.001;

      // Check if we hit a boundary and bounce
      if (mario.x > 1024 || mario.x < 0) {
        velocity.x *= -1;
      }
      if (mario.y > 768 || mario.y < 0) {
        velocity.y *= -1;
      }
      mario.setData('velocity', velocity)
    }
  }
}
