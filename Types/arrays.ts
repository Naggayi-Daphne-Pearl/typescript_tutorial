let ids: number[] = [1, 2, 3, 4, 5]; // can only contain numbers
let names: string[] = ['Daphne', 'Pearl', 'Naggayi']; // can only contain strings
// let options: boolean[] = [true, false, false]; can only contain true or false
let books: object[] = [
  { name: 'Fooled by randomness', author: 'Nassim Taleb' },
  { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; // can only contain objects
let arrys: any[] = ['hello', 1, true]; // any basically reverts TypeScript back into JavaScript

ids.push(6);
// ids.push('7'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.

// you can use union types to define arrays
// this is tuple array :  with fixed size and known datatypes
let person: (string | number | boolean)[] = ['Daphne', 1, true];
person[0] = 100;
// person[1] = {name: 'Daphne'} // Error - person array can't contain objects