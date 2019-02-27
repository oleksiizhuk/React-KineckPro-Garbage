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


function copy(mainObj) {
    let objCopy;
    let key;
    if (mainObj === undefined || mainObj === null) {
        return false;
    }
    if (typeof mainObj === 'object') {
        objCopy = {};
    }
    if (Array.isArray(mainObj)) {
        objCopy = [];
    }
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

console.log(copy(arr1));
console.log(copy(obj1));


console.log(obj1);
console.log(Object.keys(obj1));