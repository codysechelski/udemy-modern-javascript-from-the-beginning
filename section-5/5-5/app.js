const personPrototypes = {
  greeting: function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarries: function(newLastName){
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Smith';
mary.age = 30;

console.log(mary);

//Alternate syntax
const brad = Object.create(personPrototypes,{
  firstName: {value: 'Brad'},
  lastName: {value: 'Traversy'},
  age: {value: 36}
});