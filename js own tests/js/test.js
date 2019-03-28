function accum(str) {
    const mySet = new Set();
    let res = '';
    Array.from(str.toLowerCase().replace(/[^a-zA-Z]/gi, "")).filter((item) => {
        mySet.add(item);
    });
    console.log(mySet);
    for (let item of mySet.values()) {
        res += item;
    }
    console.log(res);
    return res;
}

const test = "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu";
const acum = "ZpglnRxqenU";
let res = accum(test);

if (res === acum) {
    console.log(true);
} else
    console.log(false);