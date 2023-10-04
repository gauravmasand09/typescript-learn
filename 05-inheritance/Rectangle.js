"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(xValue, yValue, _width, _length) {
        super(xValue, yValue);
        this._width = _width;
        this._length = _length;
    }
    get width() {
        return this._width;
    }
    set width(v) {
        this._width = v;
    }
    get length() {
        return this._length;
    }
    set length(v) {
        this._length = v;
    }
    getInfo() {
        return super.getInfo() + `, width=${this._width}, length=${this._length}`;
    }
}
exports.Rectangle = Rectangle;
