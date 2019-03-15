function makeArmy() {

    var shooters = [];

    for (let i = 0; i < 10; i++) {
        var shooter = function() { // функция-стрелок
            console.log(i); // выводит свой номер
        };
        shooters.push(shooter);
    }

    return shooters;
}

var army = makeArmy();
console.log(army);

for (let i = 0; i < 10; i++) {
    army[i]();
}
