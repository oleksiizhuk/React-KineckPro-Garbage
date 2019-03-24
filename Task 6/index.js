const buttonStart = document.getElementById('topButton');
const form = document.getElementById('form');
const submit = document.getElementById('submit');
const answerP = document.getElementById('answer');
let ressultQuestion = [];

buttonStart.addEventListener('click', function () {
    form.style.display = "block";
    buttonStart.style.display = "none";
});

submit.addEventListener('click', function (event) {
    event.preventDefault();
    let answer = Array.from(form).reduce((acc, item) => {
        return item.checked ? acc[item] = item.value : acc;
    }, {});

    if (!answer) {
        return;
    }
    let answersQ = newQuestions.next();
    if (answersQ.done) {
        alert('111');
        return;
    }
    form.style.display = "none";
    answerP.innerText = answer;

    setTimeout(() => {
        let answers = answersQ.value;
        console.log(answers);
        Array.from(form).forEach((item, index) => {
            if (item.type === 'radio') {
                item.value = answers[index];
                document.querySelector('label[for=' + item.getAttribute('id') + ']').innerHTML = answers[index];
            }
        });
        answerP.innerText = '';
        form.style.display = "block"
    }, 500);
});

let newQuestions = (function* getQuestion() {
    yield [1, 4, 5, 6];
    yield [2, 8, 9, 10];
})();

