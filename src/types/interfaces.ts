export interface IGrabbable {
  GetNumber(): number;
  GetThing(): object | null;
}

export interface IGrabber {
  DoThing(): void;
  speed: number;
}

export interface IAdvancedGrabber extends IGrabbable {
  OtherThing(): number;
}

export interface IBlergh {
  GetAAAAAAAAAAAHHHHThing(): number;
}