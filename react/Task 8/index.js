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

let deepEquals = (a, b) => {
    if (a === b) {
        return true;
    } else if (a && b && typeof a === 'object' && typeof b === 'object' && Object.keys(a).length === Object.keys(b).length) {
        if (Array.isArray(a) === Array.isArray(b)) {
            for (let key in a) {
                if (key in b) {
                    if (!deepEquals(a[key], b[key])) {
                        return false;
                    }
                } else {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
};

console.log(deepEquals(obj1, obj2));
console.log(deepEquals(obj3, obj4));