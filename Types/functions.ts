// Functions
// We can define what the types the function arguments should be, as well as the return type of the function
// Define a function called circle that takes a diam variable of type number, and returns a string
function circle(diam: number): string {
  return "The circumference is " + Math.PI * diam;
}

console.log(circle(10)); // The circumference is 31.41592653589793

// ES6 arrow function 
/*const circle = (diam: number): string => {
    return 'The circumference is ' + Math.PI * diam;
  };
  
  console.log(circle(10)); // The circumference is 31.41592653589793*/

// type: void 

function sayHello(name: string):void {
    console.log('Hello ' + name)
}
sayHello('Daphne')
let foo : undefined
console.log(foo); // returns undefined

