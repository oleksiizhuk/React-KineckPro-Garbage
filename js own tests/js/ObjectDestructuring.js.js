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

let user = {
    firstName: 'John',
    lastName: "Doe",
    social: {
        facebook: 'johnDoe_Facebook',
        twitter: 'jdoe',
        friends: {
            friends1: 'Aleks',
            friends2: "Sasha"
        }
    }
};
let {firstName: fist, lastName: last, social: {facebook}, social: {friends: {friends1}}, age = 25} = user;
console.log("firstName: " + fist, "lastName: " + last, "faceBook: " + facebook, friends1, age);

console.log(`--------------------`);

function post(url, {data: {firstName, lastName}, cache}) {
    console.log(firstName);
    console.log(lastName);
    console.log(cache);

}

let result = post('api/users', {data: user, cache: false});
console.log(`--------------------`);

function getUserInfo() {
    return {
        firstN: 'John',
        lastN: "Doe",
        social: {
            facebook: 'johnDoe_Facebook',
            twitter: 'jdoe_twitter',
            friends: {
                friends1: 'Aleks',
                friends2: "Sasha"
            }
        }
    };
}

let {firstN, lastN, social: {twitter}} = getUserInfo();

console.log(firstN, lastN, twitter);

console.log(`--------------------`);
const people = [
    {
        name: "Mike Smith",
        family: {
            mother: "Jane Smith",
            father: "Harry Smith",
            sister: "Samantha Smith"
        },
        age: 35
    },
    {
        name: "Tom Jones",
        family: {
            mother: "Norah Jones",
            father: "Richard Jones",
            brother: "Howard Jones"
        },
        age: 25
    }
];

for (let {name: n, family: { father: f } } of people) {
    console.log("Name: " + n + ", Father: " + f);
}