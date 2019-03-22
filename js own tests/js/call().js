const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

const person0 = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
};

const person1 = {
    firstName: "John",
    lastName: "Doe"
};
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
};
console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));

console.log(person0.fullName.call(person1, "Oslo", "Norway"));
console.log(person0.fullName.call(person2, "Oslo", "Norway"));