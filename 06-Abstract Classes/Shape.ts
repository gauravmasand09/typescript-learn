export abstract class Shape {

  constructor(private _x: number, private _y: number) {}

  public get x():number {
    return this._x;
  }

  public set x(xValue: number) {
    this._x = xValue;
  }

  public get y():number {
    return this._y;
  } 

  public set y(yValue: number) {
    this._y = yValue;
  }

  public getInfo(): string {
    return `x=${this._x}, y=${this._y}`;
  }

  abstract calculateArea(): number;

}
