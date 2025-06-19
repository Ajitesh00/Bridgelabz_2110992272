class Person{
    public name:string;
    private age:number; // Optional property

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    public greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    setName(name: string): void {
        this.name = name;
    }
    setAge(age: number): void { 
        this.age = age;
    }
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
}

// Example usage
let person1 = new Person("Ajitesh", 21);
person1.greet(); // "Hello, my name is Ajitesh and I am 22 years old."
console.log(person1.name); // "Ajitesh"
// console.log(person1.age); // Error: Property 'age' is private and only accessible within class 'Person'.
console.log(person1.getName()); // "Ajitesh"
console.log(person1.getAge()); // 21