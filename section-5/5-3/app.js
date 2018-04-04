const Person = function (firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dateOfBirth = new Date(dob);
}

Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.dateOfBirth.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.toString = function () {
  return `${this.firstName} ${this.lastName} is ${this.age} ${this.age === 1 ? 'year' : 'years'} old.`;
}

Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}

const cody = new Person('Cody', 'Sechelski', '2-10-76');
const priscila = new Person('Priscila', 'Lima', '10-20--81');

console.log(cody);
console.log(priscila.fullName());
console.log('Priscila and Cody get married');
priscila.getsMarried(cody.lastName);
console.log(priscila.fullName());

console.log(cody.hasOwnProperty('firstName'));