function closures1() {
    const shoters = [];
    for (let i = 0; i < 10; i++) {
        const shoter = function me() {
            console.log(me.i);
        };
        shoter.i = i;
        shoters.push(shoter);
    }
    return shoters;
}

const army = closures1();
army[9]();
army[2]();

function closures2() {
    const army = [];
    let i = 0;
    while (i <= 10) {
        let a = i;
        const arm = function () {
            console.log(a);
        };
        army.push(arm);
        i++;
    }
    return army;
}

const army1 = closures2();
army1[2]();
army1[3]();

function closures3() {
    const shooters = [];
    for (let i = 0; i < 10; i++) {
        const shooter = (function (x) {
            return function () {
                console.log(x);
            };
        })(i);

        shooters.push(shooter);
    }

    return shooters;
}

const army2 = closures3();
army2[0](); // 0
army2[1](); // 1

function closures4() {
    const shooters = [];
    for (let i = 0; i < 10; i++) {
        const shooter = (function (x) {
            return function () {
                console.log(x);
            };
        })(i);
        shooters.push(shooter);
    }
    return shooters;
}

const army3 = closures4();
army3[6](); // 0
army3[5](); // 1