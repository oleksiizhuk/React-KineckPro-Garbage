let langueges = ['Javascript', 'php', 'Python', 'ruby'];
let [j, ph, ry, rb] = langueges;
console.log(j, ph, ry, rb);

console.log(`--------------------------`);

let scores = [3, 4, 5];
let [low, mid, high] = scores;
console.log(low, mid, high);

console.log(`--------------------------`);

let [l, , h] = scores;
console.log(l, h);

console.log(`--------------------------`);

let [lo, ...rest] = scores;
console.log(lo, rest);

console.log(`--------------------------`);

let scores1 = [3, 4, [5, 6]];
let [l1, m1, h1] = scores1;
console.log(l1, m1, h1);

console.log(`--------------------------`);

let [l2, m2, [h2, hi2]] = scores1;
console.log(l2, m2, h2, hi2);

console.log(`--------------------------`);

function computerScore([low,mid]) {
    console.log(low, mid);
}

computerScore([3,4]);

console.log(`--------------------------`);

function getScores() {
    return [3,4,5];
}
let scores2 = getScores();
console.log(scores2);
let [l3,m3,h3] = getScores();
console.log(l3,m3,h3);

console.log(`--------------------------`);

