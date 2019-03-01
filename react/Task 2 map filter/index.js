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


const sortObjFilter = (obj, haveAPet, haveAllergies, ageProperties) => {
    const ressult = obj.filter(x => x.age === 16);
    return ressult;
};

const sortObjMap = (obj, haveAPet, haveAllergies, ageProperties) => {
    const ressult = obj.map(x => x.age === 16);
    return ressult;
};


console.log(sortObjFilter(object1));
console.log(sortObjMap(object1));
