console.log('Section 10.4 - Destructuring');


// let a, b;
// [a, b] = [100, 200];

// console.log(a);
// console.log(b);

//The Rest Patter
// [a, b, ...rest] = [100, 200, 300, 400, 500];

// console.log(a);
// console.log(b);
// console.log(rest);


// ({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500})

// console.log(a, b, rest);

// const people = ['Larry', 'Mo', 'Curly'];
// const [funnyGuy1, funnyGuy2, funnyGuy3] = people;

// console.log(funnyGuy1);
// console.log(funnyGuy2);
// console.log(funnyGuy3);


const person = {
  name:' Cody',
  age: 42,
  city: 'Dallas',
  gender: 'Male'
}

//Old ES5 way
// const name   = person.name,
//       age    = person.age,
//       city   = person.city,
//       gender = person.gender;

//New ES6 way
const {name, age, city} = person;
console.log(name, age, city);
