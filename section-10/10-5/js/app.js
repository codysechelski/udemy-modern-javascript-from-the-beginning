console.log('10.6 Maps');


const map1 = new Map();

const key1 = 'some string',
      key2 = {},
      key3 = function(){};


map1.set(key1, 'Value oF key 1');
map1.set(key2, 'Value oF key 2');
map1.set(key3, 'Value of key 3');

// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));


//ITERATING MAPS

// for (let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }

// for (let key of map1.keys()) {
//   console.log(key);
// }

// for (let value of map1.values()) {
//   console.log(value);
// }

//CONVERT TO ARRAYS
const keyValueArray = Array.from(map1);
console.log(keyValueArray);
