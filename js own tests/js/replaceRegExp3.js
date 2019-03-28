const str = "1990 - годб в котором я родился, а 1997 - год в котором я пошел в школу 1992";
// ^ - поиск сущности, в начале строки
const pattern = /^\d+/g;// поиск в начале строки
const pattern1 = /\d+$/g; // поиск в конце строки
const pattern2 = /\d/g; // поиск везде по цифре
const pattern3 = /\d+/g; // поиск везде по целому числу

console.log(str.match(pattern));
console.log(str.match(pattern1));
console.log(str.match(pattern2));
console.log(str.match(pattern3));

console.log("---------------------------");

const strJs = "jsjsjs jsj js32 j1sj";
const patternThree = /(js)+(j)/g;
const patternFour = /(js)+(\w+)/gi;

console.log(strJs.match(patternThree));
console.log(strJs.match(patternFour));
console.log("---------------------------");

const string1 = "Мартин Кинг: \" I've a dream \" ";
const patternFive = /(["])(.*?)["]/gi;
console.log(string1.match(patternFive));
