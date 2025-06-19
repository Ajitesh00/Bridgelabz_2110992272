// Enum are a special type in TypeScript that allow you to define a set of named constants.

enum CardinalDirections {
  North,
  East="East",
  South="South",
  West="West"
}
console.log(CardinalDirections.North);
console.log(CardinalDirections.East);