function showFullName() {
    console.log(this.firstName + " " + this.lastName);
}

var user = {
    firstName: "Василий",
    lastName: "Петров"
};

showFullName.call(user);


const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();