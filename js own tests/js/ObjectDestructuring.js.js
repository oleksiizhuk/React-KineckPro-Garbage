let person = {
    firstName: 'John',
    lastName: 'doe'
};
let {firstName, lastName} = person;
console.log(firstName, lastName);

console.log(`--------------------`);

let person1 = {
    firstName: 'John',
    lastName: 'doe'
};
let {firstName: a, lastName: b} = person1;
console.log(a, b);
console.log(`--------------------`);