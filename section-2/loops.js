//MAPS
const users = [
    { id: 1, name: 'Dan' },
    { id: 2, name: 'Sam' },
    { id: 3, name: 'Roy' },
    { id: 4, name: 'Jim' }
];

const ids = users.map(function (user) {
    return user.id;
});

console.log(ids);


//FOR IN LOOP
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for (let x in user) {
    console.log(`${x} is equal to ${user[x]}`);
}