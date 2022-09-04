var Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

function Teacher() {
    Teacher.prototype.teach = function (subject) {
        this.subject = subject;
        console.log(this.name + " is teaching " + this.subject);
    }
};

Teacher.prototype = Object.create(Person.prototype);

var person = new Person();
var him = new Teacher();

him.initialize("Adam", 45);
him.teach("inheritance");