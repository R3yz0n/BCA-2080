// ES6 stands for Ecmascript 6, which is the latest version of javascript.

// Synchronous & Asynchoronous

// Destructuring (Array & Object)

const vehicles = ["mustang", "f-150", "expedition"];

// Old
let firstVehicle = vehicles[0];
let secondVehicle = vehicles[1];

// Array Destructuring
const [first, second] = vehicles;

console.log(first);

const person = {
  name: "Ramey",
  address: "Jankinagar",
  age: 20,
};

//Object destructing

let hisName = person.name; // OLD way of doing things

const { firstName, address, age, classs } = person;
console.log(person);
console.log(name);
console.log(address);
console.log(classs);

// WAP to show array destruturing through function
// where function will receive a parameter as array and it will
// return the first and second element of the array

const showArrayDestructingExample = () => {};
