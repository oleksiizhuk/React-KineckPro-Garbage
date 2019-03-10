const button = document.getElementById('button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    const names = ['firstName', 'lastName', 'email'];
    let elems = document.querySelectorAll('input');
    let values = [].map.call(elems, function (obj) {
        return obj.value;
    });

    const obj = values.reduce((acc, currentValue, index) => {
        acc[names[index]] = currentValue;
        return acc;
    }, {});
    console.log(obj);
});