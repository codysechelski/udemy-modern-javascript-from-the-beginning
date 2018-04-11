//Iterator Example
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < names.length ?
//         { value: names[nextIndex++], done: false } :
//         { done: true }
//     }
//   }
// }

// const namesArray = ['Larry', 'Mo', 'Curly'];
// const names = nameIterator(namesArray);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);


//Generator Example
// function* sayNames() {
//   yield 'Larry';
//   yield 'Mo';
//   yield 'Curly';
// }

// const name = sayNames();
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());


function* createIds() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const nextId = createIds();
console.log(nextId.next().value);
console.log(nextId.next().value);
console.log(nextId.next().value);
console.log(nextId.next().value);
console.log(nextId.next().value);
console.log(nextId.next().value);
console.log(nextId.next().value);
console.log(nextId.next().value);
console.log(nextId.next().value);
console.log(nextId.next().value);
console.log(nextId.next().value);
console.log(nextId.next().value);
console.log(nextId.next().value);