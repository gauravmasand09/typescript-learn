import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from './Rectangle';


let myShape = new Shape(2,3);
let myCircle = new Circle(2,3,25);
let myRectangle = new Rectangle(2,3,25,30);


console.log("myShape",myShape.getInfo());
console.log("myCircle",myCircle.getInfo());
console.log("myRectangle",myRectangle.getInfo());