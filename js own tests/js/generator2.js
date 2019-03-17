function* generator() {
    let result = 1 + (yield);
    console.log(`Result: ${result}`);
}

let iterator = generator();
console.log(iterator.next());
console.log(iterator.next(1));
console.log("------------");

// <<<<<<<<<<<<<<<<<--------------->>>>>>>>>>>>>>>

function* generator1() {
    let arr = [yield, yield, yield];
    console.log(arr[2]);
}

let iterator1 = generator1();
console.log(iterator1.next());
console.log(iterator1.next(1));
console.log(iterator1.next(2));
console.log(iterator1.next(3));
console.log("------------");

// <<<<<<<<<<<<<<<<<--------------->>>>>>>>>>>>>>>

function* generatorDelegation() {
    yield 42;
    yield* [1, 2, 3];
    yield 43;
}

let iterator3 = generatorDelegation();
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log("------------");

// <<<<<<<<<<<<<<<<<--------------->>>>>>>>>>>>>>>

function* generatorArray() {
    yield* [1, 2, 3];
}

function* generatorArr() {
    yield 42;
    yield* generatorArray();
    yield 43;
}

let iterator4 = generatorArr();
console.log(iterator4.next());
console.log(iterator4.next());
console.log(iterator4.next());
console.log(iterator4.next());
console.log(iterator4.next());
console.log("------------");
// <<<<<<<<<<<<<<<<<--------return and throw------->>>>>>>>>>>>>>>

function* generator2() {
    try{
        yield 1;
        yield 2;
        yield 3;
    }
    catch (e) {
        console.log(e);
    }

}

let iterator5 = generator2();
console.log(iterator5.next());
console.log(iterator5.throw(new Error('Erorr (\\/)O_o(\\/)')));//
console.log(iterator5.next());