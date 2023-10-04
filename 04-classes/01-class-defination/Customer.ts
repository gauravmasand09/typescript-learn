class Customer{
    firstName:string;
    lastName:string

    constructor(firstName:string,lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let customer = new Customer("Gaurav","Singh");

console.log("First Name",customer.firstName);
console.log("Last Name",customer.lastName);