class Person {
    name: string;
    isCool: boolean;
    pets: number;
  
    constructor(n: string, c: boolean, p: number) {
      this.name = n;
      this.isCool = c;
      this.pets = p;
    }
  
    sayHello() {
      return `Hi, my name is ${this.name} and I have ${this.pets} pets`;
    }
  }
  
  const personone = new Person('Danny', false, 10);
  
  // const persontwo = new Person('Sarah', 'yes', 6); // ERROR: Argument of type 'string' is not assignable to parameter of type 'boolean'.
  
  console.log(personone.sayHello()); // Hi, my name is Danny and I have 1 pets