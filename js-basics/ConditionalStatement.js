// Control flow statement

//Example of the if-else statement
let age = 10;

if (age > 18) {
  // here age > 18 return the boolean value in this case it returns false
  console.log("Eligible for vote !");
} else {
  console.log("No you are a kid");
}

let num = -1;
// == ===

if (num == -2) {
  console.log("the no is minus one");
} else {
  console.log("the no is other than minus one");
}

// WAP using [else if ladder] **OR** [Switch statement] to check whether a character is  vowel or not.

let character = "a"; //Declaring a variable character and assigning a value "a" to it.
//First way
if (character === "a") {
  console.log("Vowel");
}
if (character === "e") {
  console.log("Vowel");
}
if (character === "i") {
  console.log("Vowel");
}
if (character === "o") {
  console.log("Vowel");
}
if (character === "u") {
  console.log("Vowel");
} else {
  console.log("Not a vowel");
}

//Second way
if (character === "a") {
} else if (character === "e") {
  console.log("Vowel");
} else if (character === "i") {
  console.log("Vowel");
} else if (character === "o") {
  console.log("Vowel");
} else if (character === "u") {
  console.log("Vowel");
} else {
  console.log("Not a vowel");
}

// The better way
if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u") {
  console.log("Vowel");
} else {
  console.log("consonant");
}
