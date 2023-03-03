var Person = /** @class */ (function () {
    function Person(n, c, p, e) {
        this.surname = n;
        this.isCool = c;
        this.pets = p;
        this.email = e;
    }
    Person.prototype.sayHello = function () {
        return "Hi, my name is ".concat(this.surname, " and I have ").concat(this.pets, " pets.");
    };
    Person.prototype.sayName = function () {
    };
    return Person;
}());
/* Alternative method for constructing class properties that is concise
class Person {
constructor(
  readonly name: string,
  private isCool: boolean,
  protected email: string,
  public pets: number
) {}

sayMyName() {
  console.log(`Your not Heisenberg, you're ${this.name}`);
}
}

const person1 = new Person('Danny', false, 'dan@e.com', 1);
console.log(person1.name); // Danny
*/
var personone = new Person('Daphne', false, 10, 'daph@gmail.com');
var persontwo = new Person('Persontwo', false, 10, 'pearl@gmail.com');
// const persontwo = new Person('Sarah', 'yes', 6); // ERROR: Argument of type 'string' is not assignable to parameter of type 'boolean'.
console.log(personone.sayHello()); // Hi, my name is Danny and I have 1 pets
// creating people array from the Person class
var People = [personone, persontwo];
console.log(People);
/*output [
   Person { name: 'Daphne', isCool: false, pets: 10 },
   Person { name: 'Persontwo', isCool: false, pets: 10 }
// ] */
