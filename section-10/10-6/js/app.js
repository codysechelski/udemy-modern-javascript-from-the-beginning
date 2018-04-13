//SETS

const set1 = new Set();

set1.add(100);
set1.add('a string');
set1.add(true);
set1.add({ name: 'cody' });

console.log(set1);

set1.add(100);

console.log(set1);
