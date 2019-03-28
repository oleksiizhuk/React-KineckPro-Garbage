//квантификаторы
// {n} где т - количество символов

const str = "Камиль камиль каиль каммммиль kamil";
const pattern = /\w{1,3}/;
const pattern1 = /\w{1,10}/;
console.log(str.replace(pattern, ""));
console.log(str.replace(pattern1, ""));

// ? = {0,1} - ноль или один
// * = {0,} - ноль или более
// . - любой символ

const patternThree = /кам?иль/ig;
const patternThree1 = /кам*иль/ig;
console.log(str.match(patternThree));
console.log(str.match(patternThree1));
console.log(str.replace(patternThree1, "="));
console.log('--------------');

const link = '<a href="http://kamil.abzalov.ru" class="myTest">ссылка</a>';

const patternFive = /href=".+"/gi; // жадный поиск
const patternSix = /href=".+?"/gi; // ленивый поиск
const patternSeven = /href="[^"]+"/gi; // ленивый поиск
console.log(link.match(patternFive));
console.log(link.match(patternSix));
console.log(link.match(patternSeven));

//1. десятичная дробь
//2 да формат 17.06.2016
//3 Поиск заголовков <h1>-<h6>
const strDB = "1.4 2 2. 21.3 a 32 as.a 12.s as.1 88.88 22.21";
const strData = "a as 17.06.2017 sdf -- sfd 17.06.2017";
const strH = '<h1> as <a2> s<h> <> <h1  h2> <2> <h7> <h2>';

//const patternDB = /[0-9]{1,}+\.+[0-9]{1,}/;
const patternDB1 = /\d+\.+[0-9]{1,}/g;
const patternDate = /[0-3]+[0-9]+\.+[0-1]+[0-9]+\.[0-9]{4}/;
const patternDate1 =/(3[01]|[12][0-9]|0?[1-9])\.+(1[1-2]|0[0-9])\.+[0-9]{4}/g;
const patternH = /<+h+[1-6]+>/g;

console.log(strData.match(patternDate));
console.log(strData.match(patternDate1));
console.log(strH.match(patternH));
console.log(strDB.match(patternDB1));
