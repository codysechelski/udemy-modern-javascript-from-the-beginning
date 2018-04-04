//Prototypal Inheritance
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function(){
  return `Hello ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Joe', 'Blow');

function Customer(firstName, lastName, phone, membership){
  //Map existing properties
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

//inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

//Make customer prototype return customer
Customer.prototype.constructor = Customer;

//Overwrite the greeting method
Customer.prototype.greeting = function(){
  return `Hello ${this.firstName} ${this.lastName}. Looks like you a ${this.membership} Partner`;
}

const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Gold');