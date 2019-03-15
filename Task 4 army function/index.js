function closure1() {
    const shoters = [];
    for (var i = 0; i < 10; i++) {
        var shoter = function me() {
            console.log(me.i);
        };
        shoter.i = i;
        shoters.push(shoter);
    }
    return shoters;
}

const army = closure1();


army[9]();
army[2]();

function clusures1() {
    var army = [];
    let i = 0;
    while (i <= 10) {
        let a = i;
        var arm = function () {
            console.log(a);
        };
        army.push(arm);
        i++;
    }
    return army;
}

const army1 = clusures1();

army1[2]();

function clusures2() {

    var shooters = [];

    for (var i = 0; i < 10; i++) {
        var shooter = (function (x) {
            return function () {
                console.log(x);
            };

        })(i);

        shooters.push(shooter);
    }

    return shooters;
}

var army2 = clusures2();

army2[0](); // 0
army2[1](); // 1


function makeArmy() {

    var shooters = [];

    for (var i = 0; i < 10; i++)(function(i) {

        var shooter = function() {
            alert( i );
        };

        shooters.push(shooter);

    })(i);

    return shooters;
}

var army = makeArmy();

army[0](); // 0
army[1](); // 1