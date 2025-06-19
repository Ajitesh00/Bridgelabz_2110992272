// Generics in TypeScript are a way to create reusable and type-safe components, functions, classes, or 
// interfaces that work with any data type. Think of them like placeholders for types.


// FUNCTION GENERICS
function greet<T>(message: T): T{
    return message;
}

console.log(greet<string>("Hello, World!")); // Output: Hello, World!
console.log(greet<number>(42)); // Output: 42

// CLASS GENERICS
class Container<T> {
    private item: T;
    constructor(item: T) {
        this.item = item;
    }
    getItem(): T {
        return this.item;
    }
}

let stringContainer = new Container<string>("Hello, Generics!");
console.log(stringContainer.getItem()); // Output: Hello, Generics!