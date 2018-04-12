console.log('10.6 Maps');


const map1 = new Map();

const key1 = 'some string',
      key2 = {},
      key3 = function(){};


map1.set(key1, 'Value od key 1');
map1.set(key2, 'Value od key 2');
map1.set(key3, 'Value od key 3');

console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));
