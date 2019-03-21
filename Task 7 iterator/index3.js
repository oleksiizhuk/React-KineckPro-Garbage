let iterator = function () {
    let current = this.from;
    let last = this.to;
    return {
        next() {
            if (current <= last) {
                return {
                    done: false,
                    value: current++
                };
            } else {
                return {
                    done: true
                };
            }
        }
    }
};

function mixArrays(cardsDeck1, cardsDeck2) {
    let newArray = [...cardsDeck1];
    let newArray2 = [...cardsDeck2];
    let mixedArray = [];
    let length = newArray.length > newArray2.length ? newArray.length : newArray2.length;
    for (let i = 0; i < length; i++) {
        if (newArray.length > i) {
            mixedArray.push(newArray[i]);
        }
        if (newArray2.length > i) {
            mixedArray.push(newArray2[i]);
        }
    }
    return mixedArray;
}

const cardsDeck1 = {from: 1, to: 5};
const cardsDeck2 = {from: 6, to: 12};
cardsDeck1[Symbol.iterator] = iterator;
cardsDeck2[Symbol.iterator] = iterator;


const mixedCards = mixArrays(cardsDeck1, cardsDeck2);
console.log(...mixedCards);


