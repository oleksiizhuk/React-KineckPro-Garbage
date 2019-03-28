const exOne = "Начинаем изучать начинаем регулярные выражения ...";
const patternOne = /ач/;
const patternTwo = /ач/gi;

console.log(exOne.search(patternOne)); // 1
console.log(exOne.match(patternOne)); //
console.log(exOne.match(patternTwo)); //
console.log(exOne.split(patternOne)); //
console.log("-------------------");
console.log(exOne.replace(patternTwo, "_")); //
console.log(exOne.replace(/начи/gi, "$")); //
console.log(exOne.replace(/изучать/i, "сосредоточились $&")); //
console.log(exOne.replace(/(начинаем) (изучать)/i, "$2 $1")); // меняет слова местами
console.log("-------------------");
// флаги
// i - независимо от регистра
// g - ищет все совпадения
// m - Многострочный режим

let myFunc = (match, offset, str) => match.toUpperCase();

const exTree = "Камиль камиль kamil";
console.log(exTree.replace(/камиль/, myFunc));

console.log("-------------------");

function secondFunc(match, firstParam, secondParam, offset, str) {
    return secondParam + " and " + firstParam;
}

console.log(exTree.replace(/(камиль) (kamil)/, secondFunc));

console.log("--------------------------------------");
console.log("--------------------УРОК 2----------------------------");
console.log("--------------------------------------");

const str = 'Продолжаем изучать род регулярные выражение род';
const pattern = /род/gi;

console.log(pattern.test(str));
console.log("lastIndex - ", pattern.lastIndex); // 4
console.log(pattern.exec(str));
console.log(pattern.lastIndex); // 22
console.log(pattern.exec(str));
console.log(pattern.lastIndex); // 47

console.log("--------------------------------------");
console.log("--------------------------------------");
console.log("--------------------------------------");

/*
* \d - любая цифра (digit)
* \s - пробел, табуляция (space)
* \w - слово буква(лат.) + "_" (word)
* \b - граница (HTML5, HTML 5).
*/
const stringWorld = "Aleks 123 HTML5 , html 5 22 ALeks 22 .";
const patternDigit = /\d/gi;
const pattersnStr = /HTML\D/gi;
/*
* Инверторы
* \D - не цыфра
* \S - не пробел
* \W - не слово (сюда подходит русские буквы)
* */
const patternPoint = /./;//поиск любого символа кроме
console.log(stringWorld.replace(patternDigit, "-!-"));
console.log(stringWorld.replace(pattersnStr, "-!-"));
console.log(stringWorld.replace(patternPoint, "-!-"));

/*
* Cпециальные символы - . () /\ и др.
* их нужно экранировать
* \(  - \\  -  \.
* */


/*
* [] - поиск в наборе одного из символов
* [-] - поиск в диапазоне - [0-9]
* ^ - кроме
* + - один символ и более
* */

console.log("--------------------------------------");
console.log("--------------------------------------");
console.log("--------------------------------------");

const nameStr = "@mail test@nail.ru mail.ru Oleksiizhuk.att@gmail.com";

console.log(nameStr.match(/[a-zA-Z_0-9.]+@[a-z]+\.\w+/gi, ));