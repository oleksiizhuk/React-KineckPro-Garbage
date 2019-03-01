const obj1 = {
    "list": [
        {
            "dt": 1487246400,
            "main": {
                "temp": 286.67,
                "temp_min": 281.556,
                "temp_max": 286.67,
                "pressure": 972.73,
                "sea_level": 1046.46,
                "grnd_level": 972.73,
                "humidity": 75,
                "temp_kf": 5.11
            }
        }
    ]
};
const obj2 = {
    "list": [
        {
            "dt": 1487246400,
            "main": {
                "temp": 286.67,
                "temp_min": 281.556,
                "temp_max": 286.67,
                "pressure": 972.73,
                "sea_level": 1046.46,
                "grnd_level": 972.73,
                "humidity": 75,
                "temp_kf": 5.11
            }
        }
    ]
};
const obj3 = {name: {user: "user"}, age: {user: "user1"}, null: {null: {null: null}}, time: 22};
const obj4 = {name: {user: "user"}, null: {null: {null: null}}, age: {user: "user1"}, time: 22};
const obj5 = {name: 'Aleks', age: 25};
const obj6 = {name: 'Aleks', age: "25"};
const arr1 = [1, [1, 2]];
const arr2 = [1, [1, 2]];
const str1 = "Hello";
const str2 = "Hello";
const int1 = 100;
const int2 = 100;

let obj = {
    user: {user: 123}, func: function () {
    }, date: new Date()
};

function makeCopy() {
    let objCopy;

    function copy(a) {
        if (typeof a !== "object") {
            return a;
        }
        if (typeof a === 'object') {
            const res = new a.constructor();
            for (let key in a) {
                res[key] = copy(a[key]);
            }
            return res;
        }
        if (Array.isArray(a)) {
            const res = new a.constructor(a.length);
            for (let i = 0; i < a.length; i++) {
                res[i] = copy(a[i]);
            }
            return res;
        }
        for (let key in a) {
            objCopy[key] = copy(a[key]);
        }
        return objCopy;
    }

    return copy;
}

let counter = makeCopy();
let objCopy = counter(obj);
obj.user.user = "changed text";
console.log(objCopy);
console.log(obj);

