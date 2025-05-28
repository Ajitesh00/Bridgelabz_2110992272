// IF, ELSE-IF, ELSE

let age = 20;

if (age < 18) {
  console.log("You're a minor.");
} else if (age >= 18 && age < 60) {
  console.log("You're an adult.");
} else {
  console.log("You're a senior.");
}


// SWITCH

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
    console.log("Weekend");
    break;
  default:
    console.log("Just another day.");
}