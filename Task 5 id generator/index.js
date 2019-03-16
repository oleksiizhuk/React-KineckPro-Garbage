let somePerson, anotherPerson, andOneMorePerson;
somePerson = {}, anotherPerson = {}, andOneMorePerson = {};

function getUnique() {
    let id = 0;
    return () => ++id;
}

const getUniqueId = getUnique();
somePerson.id = getUniqueId();
anotherPerson.id = getUniqueId();
andOneMorePerson.id = getUniqueId();
console.log(somePerson.id);
console.log(anotherPerson.id);
console.log(andOneMorePerson.id);


