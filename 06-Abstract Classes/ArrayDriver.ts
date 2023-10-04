import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from './Rectangle';


let myCircle = new Circle(2,3,25);
let myRectangle = new Rectangle(2,3,25,30);

let theShapes:Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myRectangle);


for (let item of theShapes) {
    console.log(item.getInfo());
    console.log("Area => ",item.calculateArea());
}

