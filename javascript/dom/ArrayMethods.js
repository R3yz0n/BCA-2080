// //Hoisting

// hackNasa(); //hosting
// function hackNasa() {
//   console.log("ez pz nasa is hacked !");
// }

// //Arrow function

// hackIsro();
// const hackIsro = () => {
//   console.log("ez pz ISRO is hacked !");
// };

//Array methods (special)
// Map,filter,reduce,find,forEach,some,every

let names = ["ashish", "denish", "ayush", "ayusha"];
//pathauni chiz lai arguments vaninxa
//fekni chiz return vaninxa
// Anonymous function bcz it has no name

//for map it is arguments // & name is paramter for the anonyms function
names.map((name) => {
  console.log(name);
});

// Array.push();
let a = [1, 2];
let b = [3.4];

let newMergedArray = a.concat(b);
console.log(newMergedArray);
