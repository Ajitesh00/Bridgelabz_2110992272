class abc{
    constructor() {
        this.name = "abc";
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}

class def extends abc {
    constructor() {
        super();
        this.name = "def";
    }

    getName() {
        return super.getName() + " from def";
    }
    setName(name) {
        super.setName(name + " modified in def");
    }
}

// Example usage
const instance = new def();
console.log(instance.getName());  // Output: "abc from def"
instance.setName("New Name");
console.log(instance.getName());  // Output: "New Name modified in def from def"

// The code demonstrates how to use inheritance in JavaScript with classes.
// The `abc` class has a constructor and methods to get and set the name.
// The `def` class extends `abc`, overrides the `getName` and `setName` methods,
// and calls the parent class methods using `super`.
// This allows for method overriding and extending functionality in derived classes.
// The example shows how to create an instance of the `def` class,
// call its methods, and see the effects of method overriding and inheritance.
// The output demonstrates the behavior of the `getName` and `setName` methods
// when called on an instance of the `def` class.