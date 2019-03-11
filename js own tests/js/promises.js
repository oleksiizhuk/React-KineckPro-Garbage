function applyForVisa(document) {
    console.log("обработка заявления...");
    let promises = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject("в визе отказанно нехватило док");
        }, 1000);
    });
    return promises;
}

function getVise(visa) {
    console.info('Виза полученна');
    return visa;
}

function bookHotel(visa) {
    console.log(visa);
    console.log('Бронировать отель');
    return new Promise(function (res, rej) {
        Math.random() > .5 ? res({
            places: true,
            price: 100
        }) : rej("нет мест");
    });
}

function buyTickets(price) {
    const money = 101;
    return new Promise(function (res, rej) {
        money > price.price ? res(price) : rej("не хватило денег");
    });
}

const callFamily = (arg) => {
    if (arg) {
        return console.log('покупаем билет его цена - ' + arg.price);
    } else {
        return console.log("вышлите деньги");
    }
};


applyForVisa({})
    .then(getVise)
    .then(bookHotel)
    .then(buyTickets)
    .then(callFamily)
    .catch(error => console.error(error))
    .then(() => console.error("продолжение не выполненого - выполненного обещяния"));