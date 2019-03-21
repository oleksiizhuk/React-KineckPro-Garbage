function range(start, end) {
    let flag = false;
    return {
        [Symbol.iterator]() {
            return {
                next: function () {
                    let result = {value: undefined, done: true};
                    if (start.from <= start.to && !flag) {
                        result.value = start.from++;
                        result.done = false;
                    } else if (end.from <= end.to) {
                        result.value = end.from++;
                        result.done = false;
                    }
                    flag = !flag;
                    return result;
                }
            };
        }
    };
}

const cardsDeck1 = {from: 1, to: 3};
const cardsDeck2 = {from: 6, to: 12};
let newArr = [];
for (let num of range(cardsDeck1, cardsDeck2)) {
    newArr.push(num);
}
console.log(newArr);

/*

console.log("--------");

function iterator() {
    return {
        hasNext() {

        }
    }
}

let arr1 = [1, 2, 3];
let arr2 = [5, 6, 7, 4];

let arrRes = [];

for (let i = 0; i < arr2.length; i++) {
    while (true) {
        if (i >= arr1.length) {
            break;
        }
        arrRes.push(arr1[i]);
        break;
    }
    while (true) {
        if (i >= arr2.length) {
            break;
        }
        arrRes.push(arr2[i]);
        break;
    }
}
console.log(arrRes);
*/

