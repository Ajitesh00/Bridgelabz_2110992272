// --------BAD--------
// function greetUser(name) {
//   console.log("Hello, " + name);
// }

// function sayGoodbyeUser(name) {
//   console.log("Goodbye, " + name);
// }


// --------GOOD--------
function speak(message, name) {
  console.log(`${message}, ${name}`);
}