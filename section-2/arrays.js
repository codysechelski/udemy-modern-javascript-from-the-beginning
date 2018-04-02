const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const numbers2 = [111, 222, 333, 444, 555, 666, 777, 888, 999];

let val;
val = Array.isArray(numbers);

numbers.push(100);
numbers.unshift(777);
numbers.pop();
numbers.shift();
numbers.splice(1, 3);
numbers.reverse();

val = numbers.concat(numbers2);

//sorting
val = numbers.sort(function (x, y) { x - y; });

//Reviewse sorting
val = numbers.sort(function (x, y) { y - x; });


//find
function under50(num) {
    return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);