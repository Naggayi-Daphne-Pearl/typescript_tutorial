var Person = /** @class */ (function () {
    function Person(n, c, p) {
        this.name = n;
        this.isCool = c;
        this.pets = p;
    }
    Person.prototype.sayHello = function () {
        return "Hi, my name is ".concat(this.name, " and I have ").concat(this.pets, " pets");
    };
    return Person;
}());
var personone = new Person('Danny', false, 10);
// const persontwo = new Person('Sarah', 'yes', 6); // ERROR: Argument of type 'string' is not assignable to parameter of type 'boolean'.
console.log(personone.sayHello()); // Hi, my name is Danny and I have 1 pets
