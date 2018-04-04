class Person {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `Hello ${this.firstName}`;
  }
}

const doug = new Person('Doug', 'Smith');
console.log(doug.greeting());