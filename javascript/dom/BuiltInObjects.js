// Object is a key value pair ,
// Objects can have properties and methods

//User defined
let myCar = {
  brand: "Ford",
  model: "Mustang",
  year: 1969,
  startCar: function () {
    console.log("Car started");
    return "Car started"; // return type is string
  },
};

// console.log(myCar.brand);
// console.log(myCar.startCar()); //funciton call
// let whatDidFunctionReturn = myCar.startCar();
// console.log(whatDidFunctionReturn);

// Built in objects are array,string, math, date, etc

//Array has method and properties

let names = ["ashish", "denish", "ayush", "ayusha"];

names.push("sagar"); //push is a method

console.log(names);
names.pop();
console.log(names);
console.log(names.length);

// there are things left to learn
