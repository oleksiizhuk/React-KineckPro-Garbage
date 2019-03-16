const a = () => {
    console.log("a");
};
a();
const aa = function () {
    console.log("a1");
}
aa();
const aaa = function testA() {
    console.log("a2");
}
aaa();

//testA(); будет ошибки
function b() {
    console.log("b");
};
let myFunc = z => z * 2;
console.log(myFunc(2));

let myFunct = z => {
    return z * 2;
}
console.log(myFunct(3));

const c = (function () {
    console.log("самовыщывающиеся функция c return");
    return 're';
})();

console.log(c);

(function (a) {
    console.log("анонимная функция " + a);
})("привет");

const d = function () {
    console.log('анонимная функция ');
    return "a";
};
console.log(d);
