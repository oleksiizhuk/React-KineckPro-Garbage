let symbol = Symbol('name');
let symbol2 = Symbol('name');

console.log(typeof symbol);
console.log(symbol);
console.log(symbol2);
console.log(symbol === symbol2);

console.log("-----------");

let symbolFor = Symbol.for('name');
let symbolFor2 = Symbol.for('name');
console.log(symbolFor === symbolFor2);
console.log(symbol);

console.log("-----------");

let user = {
    username: 'r2d2',
    [Symbol('password')]: '111',
    [Symbol.for('password1')]: '111'
};
console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));

let password = user[Symbol.for('password')]; // не рабочий
console.log(password);// не рабочий

let password1 = user[Symbol.for('password1')];
console.log(password1);

console.log(Object.getOwnPropertySymbols(user)); // получить обьекта символ
console.log("-----------");
