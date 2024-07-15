//Map method very very important
let numbers = [10, 4, 10, 1, 34];

//pathauni chiz lai args vanxa
//name na vako anonymous function

let returnedArray = numbers.map((nbr) => {
  //   console.log(nbr); //no return
  return nbr * 100;
});

console.log(returnedArray);

let names = ["ashish", "denish", "ayush", "ayusha"];
["ASHISH", "DENISH", "AYUSH", "AYUSHA"];

let myName = "sagar";
let uppercasedName = myName.toUpperCase();

// use map method to return the names but with uppercase
