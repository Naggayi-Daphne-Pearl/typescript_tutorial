// Obhject types
// Declare a variable called person with a specific object type annotation
let oneperson: {
  name: string;
  location: string;
  isProgrammer: boolean;
};

// Assign person to an object with all the necessary properties and value types
oneperson = {
  name: "Daphne",
  location: "Uganda",
  isProgrammer: true,
};

//personone.isProgrammer = "Yes"; // ERROR: should be a boolean

// personone = {
//   name: "John",
//   location: "US",
// };
// ERROR: missing the isProgrammer property

// for defining an object we use interface
// interfaces are useful wjen checking if multiple objects have the same properties

interface Person {
  name: string;
  location: string;
  isProgrammer: boolean;
}

let person1: Person = {
  name: "Daphne ",
  location: "Uganda",
  isProgrammer: true,
};

let person2: Person = {
  name: "Pearl",
  location: "Kenya",
  isProgrammer: false,
};

console.log(person1)
