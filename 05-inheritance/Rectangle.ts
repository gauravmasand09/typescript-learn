import { Shape } from "./Shape";

export class Rectangle extends Shape{

   constructor(xValue:number,yValue:number,private _width : number,private _length:number){
        super(xValue,yValue);
   }
   
   public get width() : number {
    return this._width;
   }

   public set width(v : number) {
    this._width = v;
   }

   public get length() : number {
    return this._length;
   }

   public set length(v : number) {
    this._length = v;
   }

   public getInfo():string {
       return super.getInfo() +`, width=${this._width}, length=${this._length}`;
   }

}