function range(start, end) {
    let current = start.from;
    let endCurrent = start.to;
    let current2 = end.from;
    let endCurrent2 = end.to;
    let flag = 0;
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let result = {value: undefined, done: true};
                    if (current <= endCurrent) {
                        result.value = current;
                        result.done = false;
                        current++;
                        return result;
                    }
                    if (current2 <= endCurrent2) {
                        result.value = current2;
                        result.done = false;
                        current2++;
                        return result;
                    }
                    if (current > endCurrent + 1) {
                        result.value = undefined;
                        result.done = true;
                    }
                    if (current2 > endCurrent2 + 1) {
                        result.value = undefined;
                        result.done = true;
                    }
                    return result;
                },
                log() {
                    console.log("console.");
                }
            };
        }
    };

}

const cardsDeck1 = {from: 1, to: 3};
const cardsDeck2 = {from: 6, to: 12};
let newArr = [];
let a = range(cardsDeck1, cardsDeck2);
console.log(a);

for (let num of range(cardsDeck1, cardsDeck2)) {
    newArr.push(num);
}
console.log(newArr);
console.log("--------");

const arrIter = [1,2,3];
let iter = arrIter[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

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

