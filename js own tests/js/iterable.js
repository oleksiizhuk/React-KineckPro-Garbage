let arr = ['a', 'b', 'c', 'd'];

for (let item of arr) {
    console.log(item);
}

console.log("------------");
let iterator = arr[Symbol.iterator]();

console.log(iterator.next());


let next = iterator.next();
while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}


console.log("------------");
//<<<<<<<<<<<<<<<<<<<<<<------------>>>>>>>>>>>>>>>>>>>
// генератор id
let idGenerator = {
    [Symbol.iterator]() {
        let id = 1;
        return {
            next() {
                let value = id > 5 ? undefined : id++;
                let done = !value;

                return {value, done};
            }
        };
    }
};

for (let id of idGenerator) {
    console.log(id);
}
console.log("------------");
//<<<<<<<<<<<<<<<<<<<<<<------------>>>>>>>>>>>>>>>>>>>

let randomGenerator = {

    [Symbol.iterator]() {
        let count = 0;
        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 9;
                count += 1;

                return {value, done};
            }
        };
    }
};

for (let random of randomGenerator) {
    console.log(random);
}
console.log("------------");

let random = randomGenerator[Symbol.iterator]();
console.log(random.next().value);

//<<<<<<<<<<<<<<<<<<<<<<------------>>>>>>>>>>>>>>>>>>>


class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(...tasks) {
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {
        let tasks = this.tasks;
        let index = 0;

        return {
            next() {
                let result = {value: undefined, done: true};

                if (index < tasks.length) {
                    result.value = tasks[index];
                    result.done = false;
                    index += 1;
                }

                return result;
            }
        };
    }
}

console.log("------------");
let taskList = new TaskList();

taskList.addTask("learn javascript", "learn ES6", "Buy product");

for (let task of taskList) {
    console.log(task);
}

console.log("------------");


class ArrayIterator {
    constructor(arr) {
        this.arr = arr.map(item => item).sort();
        this.index = 0;
    }

    next() {
        let result = {value: undefined, done: true};
        if (this.index < this.arr.length) {
            result.value = this.arr[this.index];
            result.done = false;
            this.index += 1;
        }
        return result;
    }
}

class TaskList1 {
    constructor() {
        this.tasks = [];
    }

    addTask(...tasks) {
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.tasks);
    }
}

let taskList1 = new TaskList1();
taskList1.addTask("learn javascript", "1  learn ES6", "Buy product");
for (let task of taskList1) {
    console.log(task);
}