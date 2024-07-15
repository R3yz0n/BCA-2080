console.log("Hello World!");

//Variable is the name given for the memory location
// Variable is the container which holds the data of certain type
// The type of data stored in the container is caled data type

//let keyword allocated the memory (RAM) for your variable
// which holds the data Sara of type string

let yourName = "Sara";

// console.log("yourName"); //Not treated as variable but string or you could say as it is.

console.log("Your name is " + yourName); // concatination is done with +
// the variable yourName is replaced with the value stored in it (which is Sara).
// Note the ""(double quotes)  will not be printed in the output.

console.log("Your name is ", yourName); // concatination is done with ,

console.log(`Your name is ${yourName}`); // here to display a varible we use ${}
// the template literals (``) is also used for strings

console.log(` My name is '${yourName}' `);


