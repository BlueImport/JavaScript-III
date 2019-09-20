/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. default binding = automatically binds to the window
* 2. implicit binding = binds to the left of the dot
* 3. explicit binding = attaches to the function call
* 4. new binding = a new object is created and attached to the this
*
* write out a code example of each explanation above
*/

// Principle 1

const myGreatestFunction = function () {
    console.log(this.pandas);
}

let pandas = 42;

myGreatestFunction();

// Principle 2

let Kristian = {
    name: "Kristian",
    age: 32,
    greet: function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

Kristian.greet()

// Principle 3

function Dogs() {
    this.breed = "German Shepard";
    this. say = function(){
        return "My dog is an " + this.breed + ".";
    };
}

let breed2 = "Blue Heeler";
let result = new Dogs();
console.log(result.breed2);

// Principle 4

function greet(){
    console.log(this.name);
}

let person = {
    name: "kristian"
}

greet.apply(person, [name]);