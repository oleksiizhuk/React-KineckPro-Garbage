// <<<<<<<<<<<<----->>>>>>>>>>>>>>>
function* generate() {
    yield 1;
    yield 2;
    yield 3;
}

let iterator = generate();
let a = {};
a.value = iterator.next().value;
console.log(a);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// <<<<<<<<<<<<----->>>>>>>>>>>>>>>
function* range(start, end) {
    let current = start;
    while (current <= end) {
        yield current++;
    }
}

for (let num of range(1, 3)) {
    console.log(num);
}


// <<<<<<<<<<<<----->>>>>>>>>>>>>>>
function generates() {
    let current = 1;
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let result = {value: undefined, done: true};

                    if (current <= 3) {
                        result.value = current;
                        result.done = false;
                        current++;
                    } else {
                        result.value = undefined;
                        result.done = true;
                    }
                    return result;
                }
            };
        }
    };
}

let iterators = generates()[Symbol.iterator]();

console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());

// <<<<<<<<<<<<----->>>>>>>>>>>>>>>

function range2(start, end) {
    let current = start;
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let result = {value: undefined, done: true};

                    if (current <= end) {
                        result.value = current;
                        result.done = false;
                        current++;
                    } else {
                        result.value = undefined;
                        result.done = true;
                    }
                    return result;
                }
            };
        }
    };
}

for (let num of range2(1, 10)) {
    console.log(num);
}