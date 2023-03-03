class Person {
    readonly surname: string; // This property is immutable - it can only be read
    private isCool: boolean; // Can only access or modify from methods within this class
    public pets: number; // Can access or modify from this class and subclasses
    protected email : string; // Can access or modify from this class and subclasses
  
    constructor(n: string, c: boolean, p: number, e:string) {
      this.surname = n;
      this.isCool = c;
      this.pets = p;
      this.email = e;
    }
  
    sayHello() {
      return `Hi, my name is ${this.surname} and I have ${this.pets} pets.`;
    }
    sayName(){

    }
  }

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
  const personone = new Person('Daphne', false, 10, 'daph@gmail.com');
  const persontwo = new Person ('Persontwo', false, 10, 'pearl@gmail.com');

  // const persontwo = new Person('Sarah', 'yes', 6); // ERROR: Argument of type 'string' is not assignable to parameter of type 'boolean'.
  
  console.log(personone.sayHello()); // Hi, my name is Danny and I have 1 pets
  
  // creating people array from the Person class
  let People: Person[] = [personone, persontwo]
  console.log(People); 
  /*output [
     Person { name: 'Daphne', isCool: false, pets: 10 },  
     Person { name: 'Persontwo', isCool: false, pets: 10 }
  // ] */
  