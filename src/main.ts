// import Phaser from 'phaser';
// import MainScene from './scenes/MainScene';

import ButtonComponent from "./fake-dom-stuff/ButtonComponent";
import { CastToClickable, CastToRightClickable } from "./fake-dom-stuff/ButtonComponent.gen";
import { FindComponentContainer } from "./fake-dom-stuff/FindComponentContainer";

// new Phaser.Game({
//   width: 1024,
//   height: 768,
//   backgroundColor: 0xA1E064,
//   scale: {
//     mode: Phaser.Scale.FIT,
//   },
//   // Remove or comment to disable physics
//   physics: {
//     default: 'arcade',
//     arcade: {
//       gravity: {
//         y: 100,
//       }
//     }
//   },
//   // Entry point
//   scene: MainScene // or PhysicsScene
// })



new ButtonComponent('okay');
new ButtonComponent('hello');

window.addEventListener('contextmenu', (e:MouseEvent) => {
  console.log('click');
  const target = e.target;
  const component = FindComponentContainer(<HTMLElement>target)?.componentInstance;
  console.log('component...', component);

  console.log(e.button);
  const clickable = CastToRightClickable(component);

  if (clickable) {
    e.preventDefault();
    clickable.onRightClick();
  }
});

window.addEventListener('click', (e:MouseEvent) => {
  console.log('click');
  const target = e.target;
  const component = FindComponentContainer(<HTMLElement>target)?.componentInstance;
  console.log('component...', component);

  console.log(e.button);
  CastToClickable(component)?.onClick();
});