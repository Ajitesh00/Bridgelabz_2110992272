let user = {
  name: "Ajitesh"
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(descriptor);

Object.defineProperty(user, "age", {
  value: 25,
  writable: false,       // can't change
  enumerable: false,     // won't show in loop
  configurable: false    // can't delete or reconfigure
});

user.age=30;
console.log(user.age); // 25, not changed

for(let key in user) {
  console.log(key); // only "name" will be logged, "age" is not enumerable
}

delete user.age; // won't work, age is not configurable
console.log(user.age); // still 25, not deleted