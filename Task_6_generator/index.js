const buttonStart = document.getElementById('topButton');
const form = document.getElementById('form');
const submit = document.getElementById('submit');
const answerP = document.getElementById('answer');
const pQuestion = document.getElementById('question');
let resultQuestion = [];

buttonStart.addEventListener('click', function () {
    form.style.display = "block";
    buttonStart.style.display = "none";
    getQuestionAndAnswer();
});

submit.addEventListener('click', function (event) {
    event.preventDefault();
    let answer = Array.from(form).reduce((acc, item) => {
        return item.checked ? acc[item] = item.value : acc;
    }, {});
    resultQuestion.push(answer);
    form.style.display = "none";
    answerP.innerText = answer;
    setTimeout(() => {
        getQuestionAndAnswer();
    }, 500);
});

function getQuestionAndAnswer() {
    let answers = newAnswer.next();
    let newQuestion = question;
    if (answers.done || newQuestion.done) {
        answerP.innerText = checkQuestion();
        return;
    }
    let answer = answers.value;
    console.log(answer);
    Array.from(form).forEach((item, index) => {
        if (item.type === 'radio') {
            item.value = answer[index];
            document.querySelector('label[for=' + item.getAttribute('id') + ']').innerHTML = answer[index];
        }
    });
    pQuestion.innerText = newQuestion.next().value;
    answerP.innerText = '';
    form.style.display = "block"
}

let newAnswer = (function* getQuestion() {
    yield [1913, 1914, 1915, 1916];
    yield ["Илон Маск", "Билл Гейтс", "Николас Паскаль", "Стив Джобс"];
    yield [42, 44, 46, 47];
})();
let newQuestion = () => {
    let func = (function* func() {
        yield "В каком года началась первая мировая ?";
        yield "Кто основал SpaceX";
        yield "Сколько хромосом в геноме человека";
    })();
    return func;
};
let question = newQuestion();

function checkQuestion() {
    let finalArr = [];
    const rightAnswer = ["1914", "Илон Маск", "46"];
    rightAnswer.forEach((e1) => resultQuestion.forEach((e2) => {
            if (e1 === e2) {
                finalArr.push(e1)
            }
        }
    ));
    if (finalArr.length !== rightAnswer.length) {
        return "Bad boy!";
    }
    return 'Nice job !';
}