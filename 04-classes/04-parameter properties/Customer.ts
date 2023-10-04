class Customer {

    //parameter properties automactically it will assign
    constructor(private _firstName:string,private _lastName:string){}

    public get firstName():string{
        return this._firstName;
    }

    public set firstName(value:string){
        this._firstName = value
    }

    public get lastName():string{
        return this._lastName;
    }

    public set lastName(value:string){
        this._lastName = value
    }

}

let customer = new Customer("Gaurav","Singh");

console.log("First Name",customer.firstName);
console.log("Last Name",customer.lastName);