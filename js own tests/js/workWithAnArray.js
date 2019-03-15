// add items or other arrays

//Array.splice()
let arr = [5, 1, 8];

arr.splice(1, 0, 'tacos');

console.log("Array.splice() - " + arr); // [5, 1, 'tacos', 8]

// array.push()
let arr1 = [1, 2, 3];

arr1.push(2);

console.log("array.push() - " + arr1);

//Array.unshift()
let arr2 = [5, 1, 8];
arr2.unshift(2, 7);
console.log("Array.unshift() " + arr2); // [2, 7, 5, 1, 8]
//Array.concat()

let arrr = [5, 1, 8];
let arrr2 = ['a', 'b', 'c'];
let arrr3 = arrr.concat(arrr2);
console.log("arr.concat - " + arrr3); //[5, 1, 8, 'a', 'b', 'c']

