const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.net',
    hobbies: ['music', 'food'],
    address: {
        city: 'Dallas',
        state: 'TX'
    },
    getBirthYear: function () { return new Date().getFullYear() - this.age; }
}

let val;

val = person.getBirthYear();


console.log(val);
