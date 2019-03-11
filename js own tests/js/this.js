function showFullName() {
    console.log(this.firstName + " " + this.lastName);
}

var user = {
    firstName: "Василий",
    lastName: "Петров"
};

// функция вызовется с this=user
showFullName.call(user) // "Василий Петров"