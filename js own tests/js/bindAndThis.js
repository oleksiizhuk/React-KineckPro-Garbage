let dog = {
    sound: 'woof',
    talk: function () {
        console.log(this.sound)
    }
};

dog.talk();

let talkFunction = dog.talk;
talkFunction(); // undefined

let boundFunction = talkFunction.bind(dog);
boundFunction(); // woof

let testFunction = dog.talk.bind(dog);
testFunction(); // woof

//let button = document.getElementById('myButton');   // если подключить html будет работать
//button.addEventListener('click', dog.talk.bind(dog));   // если подключить html будет работать