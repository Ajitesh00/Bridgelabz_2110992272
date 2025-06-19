interface Base{
    name: string;
    greet():void;
}

class Child implements Base {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let child = new Child("Alice");
child.greet(); // Output: Hello, my name is Alice