//proper way to test from undefined

let id;

if (typeof id !== 'undefined') {
    console.log(`This id is ${id}`);
}
else {
    console.log('The id is undefined');

}