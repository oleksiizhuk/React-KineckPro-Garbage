class Lider {
    constructor(word, test = Lider.testStatic()) {
        this.word = word
    }

    sayWhoIm() {
        console.log("I'm Lider");
    }
    static testStatic() {
        return "test Static"
    }
}

class Task extends Lider {

    say() {
        console.log(this.word);
    }

     says() {
        return super.sayWhoIm() + "test";
    }
    static staticMethod() {
        console.log('Вызван статический метод');
    }
    static anotherStaticMethod() {
        return this.staticMethod() + ' из другого статического метода';
    }

    run() {
        console.log('i run')
    }

    sleep() {
        console.log("i sleeping");
    }

    test() {
        this.say();
        this.run();
        this.sleep();
        this.says();
    }

}

let task = new Task("slowo");
task.test();


class StaticMethodCall {
    static staticMethod() {
        console.log('Вызван статический метод');
        return 'Вызван статический метод';

    }
    static anotherStaticMethod() {
        return this.staticMethod() + ' из другого статического метода';
    }
    good() {
        return this.staticMethod();
    }
}

a = new StaticMethodCall();
//a.staticMethod();
StaticMethodCall.staticMethod();
StaticMethodCall.good();
StaticMethodCall.anotherStaticMethod();