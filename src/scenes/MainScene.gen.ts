// This is an autogenerated file, DO NOT EDIT.
// This file was generated from `MainScene.ts` by running `npm run gen:components`.
import type { IMario } from '../scenes/MainScene';

export function CastToMario(obj: any): IMario | null {
  return (obj !== null && obj !== undefined && CastToGrabbable(obj) !== null && typeof(obj.DoMarioThing) === "function") ? obj : null;
}
