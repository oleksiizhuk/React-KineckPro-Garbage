const object1 = [
    {
        Name: "bobik",
        age: 15,
        HaveAPet: true,
        HaveAllergies: false,
    },
    {
        Name: "syslik",
        age: 16,
        HaveAPet: false,
        HaveAllergies: true,
    },
    {
        Name: "sharik",
        age: 16,
        HaveAPet: true,
        HaveAllergies: true,
    },
    {
        Name: "hrystik",
        age: 17,
        HaveAPet: false,
        HaveAllergies: false,
    }];

const form = document.querySelector('#form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const HaveAPet = document.querySelector('#HaveAPet').checked;
    const HaveAllergies = document.querySelector('#HaveAllergies').checked;
    const cowbell = document.querySelector('#cowbell').value;

    /* console.log(HaveAPet);
     console.log(HaveAllergies);
     console.log(cowbell);*/

    const ress = sortObjFilter(object1, HaveAPet, HaveAllergies, cowbell);
    console.log(ress);

});

/*var elems = document.querySelectorAll('.select option:checked');
var values = [].map.call(elems, function (obj) {
    return obj.value;
});
console.log(values);*/

const sortObjFilter = (obj, haveAPet, haveAllergies, ageProperties) => {

    const ressult1 = obj.filter((x) => {
        if (x.HaveAPet === haveAPet && x.HaveAllergies === haveAllergies && x.age > ageProperties) {
            return x;
        }
    });
    return ressult1;
};

