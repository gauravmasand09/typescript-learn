var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var customer = new Customer("Gaurav", "Singh");
console.log("First Name", customer.firstName);
console.log("Last Name", customer.lastName);
