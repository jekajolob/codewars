//Console and debugging
console.log("Hello");   // Print
console.error("Oops");  // Error message
console.table([1,2,3]); // Nice table view
console.warn("Be careful!"); // Warning message

// Variables
let a = 5;     // changeable
const b = 10;  // fixed
var c = 20;    // old, avoid
a = 15;        // reassign
// b = 20;     // error

// Data types
let str = "text";   // string
let num = 42;       // number
let bool = true;    // boolean
let arr = [1, 2, 3]; // array
let obj = { key: "value" }; // object
let nothing = null;
let notSet; // undefined
let func = function() { return "I'm a function"; };

//Strings
"hi".length          // 2
"hi".toUpperCase()   // "HI"
"hi".includes("h")   // true
"hi".slice(0,1)      // "h"
"hi".replace("h","H")// "Hi"
"hi".charAt(0)       // "h"
"hi".indexOf("i")    // 1
" hi ".trim()        // "hi"
`Hello, ${str}!`     // Template literal

// Numbers
Math.PI               // 3.14159...
Math.round(4.7)      // 5
Math.floor(4.7)      // 4
Math.ceil(4.1)       // 5
Math.random()        // random number [0,1)
Math.max(1,2,3)      // 3
Math.min(1,2,3)      // 1
parseInt("42")       // 42
parseFloat("3.14")   // 3.14
(0.1 + 0.2).toFixed(2) // "0.30"

// Type conversion
String(123);         // "123"
Number("123");       // 123
Boolean(1);          // true
Boolean(0);          // false
Array.from("abc");   // ['a','b','c']
JSON.parse('{"key":"value"}'); // {key: "value"}
JSON.stringify({key: "value"}); // '{"key":"value"}'

// Type checking
console.log(typeof str); // "string"
console.log(Array.isArray(arr)); // true    
console.log(obj instanceof Object); // true

// Spread & Rest (...)
let arr1 = [1,2];
let arr2 = [3,4];
[...arr1, ...arr2]; // [1,2,3,4]

function sum(...nums) {
  return nums.reduce((a,b) => a+b);
}
sum(1,2,3); // 6

//Sets & Maps
// Set = unique values
let s = new Set([1,1,2,3]);
console.log([...s]); // [1,2,3]

// Map = key-value pairs
let m = new Map();
m.set("a", 1);
m.get("a"); // 1


// Operators
let sum = a + b;      // addition
let diff = b - a;     // subtraction
let prod = a * b;     // multiplication
let quot = b / a;     // division
let mod = b % a;      // modulus
let exp = a ** 2;     // exponentiation

// Comparison
console.log(a == 15);    // true (value)
console.log(a === 15);   // true (value and type)
console.log(a != 10);    // true (value)
console.log(a !== "15"); // true (value and type)
console.log(a > 10);     // true
console.log(a < 20);     // true
console.log(a >= 15);    // true
console.log(a <= 15);    // true

// Logical operators
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)   
console.log(!true);         // false (NOT)

// Loops
for (let i=0; i<3; i++) console.log(i);

for (let n of [10,20]) console.log(n);

for (let k in user) console.log(k, user[k]);





// Control structures
if (a > 10) {
    console.log("a is greater than 10");
} else if (a === 10) {
    console.log("a is 10");
} else {
    console.log("a is less than 10");
}

for (let i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
}

let j = 0;
while (j < 5) {
    console.log(j); // 0,1,2,3,4
    j++;
}

do {
    console.log(j); // 5
    j++;
} while (j < 5);

// Functions
function add(x, y) {
    return x + y;
}
console.log(add(5, 10)); // 15

const multiply = (x, y) => x * y;
console.log(multiply(5, 10)); // 50

// Arrays
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // 5
numbers.push(6);             // add to end
numbers.pop();               // remove from end
numbers.shift();             // remove from start
numbers.unshift(0);          // add to start
console.log(numbers.indexOf(3)); // 2
console.log(numbers.slice(1, 4)); // [1,2,3]

// Objects
let person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
console.log(person.name); // Alice
person.greet();          // Hello, Alice

// ES6 Features
let templateStr = `My name is ${person.name} and I am ${person.age} years old.`;
console.log(templateStr);

let [first, second] = numbers; // destructuring
console.log(first, second); // 0 1

let { name, age } = person; // destructuring
console.log(name, age); // Alice 30

let newPerson = { ...person, city: "New York" }; // spread operator
console.log(newPerson);

// Promises
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
});
promise.then(result => console.log(result)); // Done!

// Async/Await
async function fetchData() {
    let data = await promise;
    console.log(data); // Done!
}
fetchData();

// Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}

let dog = new Dog('Rex');
dog.speak(); // Rex barks.                  
// Modules (ES6)
// export function myFunc() { ... }
// import { myFunc } from './myModule.js';

// Note: This is a basic cheat sheet and does not cover all JavaScript features.    For more advanced topics, refer to official documentation or specific tutorials.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
// https://javascript.info/
// https://www.freecodecamp.org/news/the-modern-javascript-cheat-sheet/
//
// Other useful snippets