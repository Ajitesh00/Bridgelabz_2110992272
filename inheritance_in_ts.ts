class Shape{
    public height:number;
    public width:number;

    constructor(height:number,width:number){
        this.height=height;
        this.width=width;
    }
    area(): number {
        return this.height * this.width;
    }
}

class Circle extends Shape {
    public radius: number;

    constructor(radius: number) {
        super(radius, radius); // Circle can be treated as a square for area calculation
        this.radius = radius;
    }

    area(): number {
        super.area(); // Call the area method of the parent class
        return Math.PI * this.radius * this.radius; // Area of circle
    }
}

let c1=new Circle(5);
console.log(c1.area()); // Output: 78.53981633974483