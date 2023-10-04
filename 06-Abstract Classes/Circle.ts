import { Shape } from "./Shape";

export class Circle extends Shape {

    constructor(xValue: number, yValue: number, private _radius: number) {
        super(xValue, yValue);
    }

    public get radius(): number {
        return this._radius;
    }

    public set radius(v: number) {
        this._radius = v;
    }

    public getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}`;
    }

    public calculateArea(): number {
        return Math.PI * Math.pow(this._radius,2);
    }

}