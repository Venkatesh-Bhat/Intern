// let a = window.prompt("Enter age");
// function checkAge() {
//   if (a < 15) {
//     window.alert("Hes innocent");
//   } else {
//     window.alert("He's notorious");
//   }
// }

// checkAge();

// let name = "Mike Tyson";
// function helloBro(nameArg) {
//   window.alert(`Hello ${nameArg}`);
// }
// helloBro(name);

// let name = "Mike Tyson";
// let greet = "Hello ";
// function helloBro(nameArg, greeting) {
//   window.alert(`${greeting} ${nameArg}`);
// }
// helloBro(name, greet);

// let name = "Mike Tyson";
// let greet = "Hello ";
// function helloBro(nameArg, greeting) {
//   return `${greeting} ${nameArg}`;
// }
// console.log(helloBro(name, greet));

let name = "Mike Tyson";
let greet = "Hello ";
let age = window.prompt("Enter Age");
function helloBro(nameArg, greeting, ageArg) {
  if (ageArg < 12) {
    return `${greeting} ${nameArg}, You are Innocent`;
  }
  return `${greeting} ${nameArg}, You are notorious!`;
}

console.log(helloBro(name, greet, age));
