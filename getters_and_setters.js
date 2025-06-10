class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.length < 3) {
      console.log("Name too short.");
    } else {
      this._name = newName;
    }
  }
}

const user = new User("AJ");
user.name = "AJ"; // Name too short.
user.name = "Ajitesh";
console.log(user.name); // Ajitesh


// Rule of Thumb: Always use a different name inside getter/setter to store the actual value, like:

// Public Property (via getter/setter)	Internal Storage
// age	                                _age
// name	                                _name
// score	                              __score