class User{
    public name: string;
    protected age: number;
    private isEarning: boolean;

    constructor(name: string, age: number, isEarning: boolean=true) { // default value for isEarning is true
        this.name = name;
        this.age = age;
        this.isEarning = isEarning;
    }
}

class Employee extends User {
    public salary: number;

    constructor(name: string, age: number, salary: number) {
        super(name, age); // Call the parent constructor (runs fine without passing isEarning)
        this.salary = salary;
    }

    print(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
    }
}

let user = new User("John", 30, true);
console.log(user.name); // Accessible
// console.log(person.age); // Accessible within the class or subclasses, not outside
// console.log(person.isEarning); // Not accessible outside the class

let employee = new Employee("Jane", 28, 50000);
employee.print(); // Output: Name: Jane, Age: 28, Salary: 50000