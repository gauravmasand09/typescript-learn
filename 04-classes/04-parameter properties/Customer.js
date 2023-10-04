"use strict";
class Customer {
    //parameter properties automactically it will assign
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let customer = new Customer("Gaurav", "Singh");
console.log("First Name", customer.firstName);
console.log("Last Name", customer.lastName);
