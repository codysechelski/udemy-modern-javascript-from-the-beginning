//FUNCTION DECLARATIONS
function greet(firstName = 'John', lastName = 'Joe') { //example of using argument defaults
    return `Hello, ${firstName} ${lastName}`;
}

console.log(greet('Cody', 'Sechelski'));




//FUNCTION EXPRESIONS
const square = function (x) {
    return x * x;
};

console.log(square(8));



//IMMEDIATLY INVOKABLE FUNCTION EXPRESSION - IIFEs
(function (name = 'Joe') {
    console.log(`Hello ${name}`);
})('Sam')



//PROPERTY METHODS
const todo = {
    add: function () {
        console.log('Add todo...');
    }
}

todo.add();