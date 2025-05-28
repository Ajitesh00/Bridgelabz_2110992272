function greet(greeting) {
  console.log(greeting + ', ' + this.name);
}

const person = { name: 'Ajitesh' };

greet.call(person, 'Hello'); // Hello, Ajitesh
greet.apply(person, ['Hi',]); // Hi, Ajitesh
const greetAjitesh = greet.bind(person, 'Hey');
greetAjitesh(); // Hey, Ajitesh


let user1={
    firstname: "Ajitesh",
    lastname: "Madhu",
    printname: function(city,state){
        console.log(this.firstname,this.lastname+" from "+city+", "+state);
    }
}

user1.printname("Hisar","Harayana");

let user2={
    firstname: "Sachin",
    lastname: "Tendulkar"
}

// function borrowing
user1.printname.call(user2,"Mumbai","Maharashtra");

// use apply to pass arguments as array
user1.printname.apply(user2,["Mumbai","Maharashtra"]);

// use bind to make a copy of the function (returns a new function) only to be called later
let bindprint=user1.printname.bind(user2,"Mumbai","Maharashtra");
bindprint();