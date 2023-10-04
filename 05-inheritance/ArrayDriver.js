"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(2, 3);
let myCircle = new Circle_1.Circle(2, 3, 25);
let myRectangle = new Rectangle_1.Rectangle(2, 3, 25, 30);
let theShapes = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let item of theShapes) {
    console.log(item.getInfo());
}
