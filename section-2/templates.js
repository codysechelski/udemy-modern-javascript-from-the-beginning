const name = 'John';
const age = 30;
const job = 'Web Veveloper';
const city = 'Dallas';
let html;

//without template string (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';


function hello() {
    return 'Hello';
}

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>--------------</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'young' : 'old'}</li>
    </ul>
`;

//with template string (es2015+)
document.body.innerHTML = html;