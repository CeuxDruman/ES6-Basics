// Task 1: Introduction

//console.log('Hello, ES6!');





// ---------------------------------------------
// Task 2: Variables (let) and Scoping

console.log("-------- ES5 --------");

console.log(name); // You can user a "var" variable before its declaration, it will return "undefined".

var name = "Carlos";
console.log(name);

var name = "Alberto";
console.log(name);

name = "Carlos";
console.log(name);

console.log("-------- ES6 --------");

//console.log(surname); // 1. You can't use a variable before its declaration.

let surname = "Mata";
console.log(surname);

//let surname = "Gil" // 2. You can't re-declare a variable.
surname = "Gil"
console.log(surname);


console.log("-------- var scope (function scope) --------");

var name = "Carlos";

function printName() {
    console.log("inside 1: " + name);
    name = "Carlos A";
    console.log("inside 2: " + name);
    var name = "Alberto";
    console.log("inside 3: " + name);
}
printName();
console.log("outside: " + name);

console.log("-------- var scope (box scope) --------");

for (var i = 0; i < 2; i++) {
    var parrot = "Hey!";
}

console.log(parrot);
console.log(i);

console.log("-------- let & const scope (block scope) --------");

// using let would through an error, as parrot and i wouldn't exist
/*
for (let i = 0; i < 2; i++) {
    let parrot = "Hey!";
}
*/

var name = "Carlos";

function printName() {
    let name = "Alberto";
    console.log("inside: " + name);
}
printName();
console.log("outside: " + name);
// As functions also have blocks {} let works as expected: variables declared inside the function doesn't affect outside.




// Task 2: Execise 1: Fix the code to print 15
console.log("-------- Execise 1 --------");

//var age = 15;
let age = 15; // For consistency, change this also to let

//for (let age = 1; age <= 10; age++) { // Original
for (let age = 1; age <= 10; age++) { // Fixed
    console.log(age);
}

console.log("Final age: " + age); // Should print 15 instead of 10



// Task 2: Execise 2: Fix the code to print Jack Russell Terrier
console.log("-------- Execise 2 --------");

//var myDog = "Jack Russell Terrier";
//var shortLeggies = true;
let myDog = "Jack Russell Terrier"; // For consistency, change all variables also to let
let shortLeggies = true; // For consistency, change all variables also to let

if (shortLeggies) {
    let myDog = "Welsh Corgie";
    console.log(myDog);
} else {
    let myDog = "Border Collie";
    console.log(myDog);
}

console.log("My dog is: " + myDog); // Jack Russell Terrier







// ---------------------------------------------
// Task 3: Variables (const) and Immutability
console.log("-------- const - variable --------");

// Difference with let: const variables can't be re-defined.

/* // This works
let artist = "Van Gogh";
console.log(artist);
artist = "Goggin";
console.log(artist);
*/

//const artist; // This will fail, as all const variables must be initialized
const artist = "Van Gogh";
console.log(artist);
//artist = "Goggin"; // This will fail, as const variables are inmutable
//console.log(artist);

console.log("-------- const - array --------");

// IMPORTANT: You can't change the variable, but you can change its "content".
const paintings = [
    "The Starry Night",
    "The Night Cafe"
]
console.log(paintings);
paintings.push("Irises");
console.log(paintings);
paintings[0] = "Almond Blossoms";
console.log(paintings);

//paintings = []; // This will fail, as you can't assign a new value to a const varaible.

console.log("-------- const - object --------");

// Same behavior as with arrays

const paintingInformation = {
    name: "Starry Night",
    painter: "Van Gogh"
}
console.log(paintingInformation);
paintingInformation.year = "1889";
console.log(paintingInformation);
paintingInformation.name = "The " + paintingInformation.name;
console.log(paintingInformation);

//paintingInformation = {} // This will fail for the same reason

console.log("-------- const - freexing value of the properties of an object --------");

// Using Object.freeze();

// Object
const frozenPaintingInformation = {
    name: "Starry Night",
    painter: "Van Gogh"
}
console.log(frozenPaintingInformation);

Object.freeze(frozenPaintingInformation);

frozenPaintingInformation.year = "1889";
console.log(frozenPaintingInformation);
frozenPaintingInformation.name = "The " + frozenPaintingInformation.name;
console.log(frozenPaintingInformation);

// Changes on the object won't fail, but also won't be applied

console.log("-------- const - freexing value of the properties of an array --------");

// Array
const frozenPaintings = [
    "The Starry Night",
    "The Night Cafe"
]
console.log(frozenPaintings);

Object.freeze(frozenPaintings);

//frozenPaintings.push("Irises"); // On Arrays, a push WILL fail: "object is not extensible"
//console.log(frozenPaintings);
frozenPaintings[0] = "Almond Blossoms";
console.log(frozenPaintings);

console.log("-------- const - freexing values of nested properties --------");

// IMPORTANT: It will only protect the first level inside the object, other object nested inside the first level can be modified.

const paintingNestedInformation = {
    name: "Starry Night",
    painter: "Van Gogh",
    location: {
        museum: "MoMA",
        city: "New York City"
    }
}

Object.freeze(paintingNestedInformation);

paintingNestedInformation.location.country = "USA"; // This WILL work because it is a nested property
console.log(paintingNestedInformation);

// For freezing nested properties, you have to explicitly freeze that property.
const frozenPaintingNestedInformation = {
    name: "Starry Night",
    painter: "Van Gogh",
    location: {
        museum: "MoMA",
        city: "New York City"
    }
}

Object.freeze(frozenPaintingNestedInformation);
Object.freeze(frozenPaintingNestedInformation.location);

frozenPaintingNestedInformation.location.country = "USA"; // This WILL work because it is a nested property
console.log(frozenPaintingNestedInformation);


// TASK 3: Exercise: Refactor the code to use let/const
console.log("-------- Execise 3 --------");

var painter = {
    name: "Van Gogh",
    nationality: "Dutch",
    paintings: ["The Starry Night", "Irises", "Almond Blossoms"]
};

Object.freeze(painter); // Added
Object.freeze(painter.paintings); // Added

painter.birthDate = "March 30, 1853";
//painter.paintings.push("Something"); // Commented to avoid error

console.log(painter); // Should print { name: 'Van Gogh', nationality: 'Dutch', paintings: [ 'The Starry Night', 'Irises', 'Almond Blossoms' ] }

console.log("-------- Challenge Task: Factory function / My solution --------");

/*
Create a function that takes an array of numbers and returns an array of functions.
Each function should return the number at that position squared.
*/

function getSquaredValuesFactory(numbers) {
    var functions = [];

    for (let i = 0; i < numbers.length; i++) { // 1. Changed var to let
        var getSquaredValue = function() {
            // TODO: Implement to return the squared value of the current number
            return numbers[i]**2; // 2 and last. Added
        }

        functions.push(getSquaredValue);
    }

    return functions;
}

var number = [1, 2, 3, 4];
var squaredValuesFns = getSquaredValuesFactory(number);

// The output should be: 1, 4, 9, 16
squaredValuesFns.forEach(fn => console.log(fn()));


console.log("-------- Challenge Task: Factory function / Teacher's solution --------");

/*
Create a function that takes an array of numbers and returns an array of functions.
Each function should return the number at that position squared.
*/

function getSquaredValuesFactory(numbers) {
    var functions = [];

    for (var i = 0; i < numbers.length; i++) {
        const number = numbers[i]; // 1. Make it const instead of var, so a new "environment" is created for each loop cycle.
        var getSquaredValue = function() {
            // TODO: Implement to return the squared value of the current number
            return number*number; // 2 and last. Added
        }

        functions.push(getSquaredValue);
    }

    return functions;
}

var number = [1, 2, 3, 4];
var squaredValuesFns = getSquaredValuesFactory(number);

// The output should be: 1, 4, 9, 16
squaredValuesFns.forEach(fn => console.log(fn()));


// ---------------------------------------------
// TASK 4: Destructuring






// Task 4: Exercise: Extract data with destructuring

// const ingredients = {
//     tea: 'black',
//     milk: 'soy',
//     sweetener: 'honey',
//     spices: ['ginger', 'cardamom', 'cinnamon', 'nutmeg']
// }

// // Destructure the parameters
// function prepareChai(ingredients) {
//     const tea = ingredients.tea;
//     const spices = ingredients.spices;
//     const milk = ingredients.milk;
//     const sweetener = ingredients.sweetener;

//     console.log("Mix the " + tea + " tea " +
//         "with the " + spices + " in a small pot. " + 
//         "Add a cup of water and bring to boil. Boil for 2-3 min. " +
//         "Add " + milk + " milk and " + sweetener + ". " + 
//         "Simmer for 3 min. Serve masala chai hot or warm!");
// }

// prepareChai(ingredients);





// ---------------------------------------------
// TASK 5: Strings and Interpolation







// TASK 5: Exercise: Refactor the code to use the ES6 String utility methods

// const country = "Bulgaria";
// const city = "Sofia";

// if (country.indexOf("Bulg") > - 1) {
//     console.log("The country starts with Bulg");
// }

// if (city.indexOf("So") === 0) {
//     console.log("The name starts with So");
// }

// if (city.lastIndexOf("a") === city.length - 1) {
//     console.log("The name ends with a");
// }

// console.log(
//     "The capital of " + country +
//     " is the city of " + city
// );









// ---------------------------------------------
// TASK 6: Arrow functions








// TASK 6: Exercise: Filter out only the prime numbers from the array

// const primeNumbers = [1, 2, 3, 4, 5, 6].filter(/* add the function to filter out the prime numbers */);
// console.log(primeNumbers);







// ---------------------------------------------
// TASK 7: Arrow functions and this







// Task 7: Exercise

// function Translator() {
//    this.phrase = "good day";
//    this.englishBulgarianDictionary = {
//        good: "добър",
//        day: "ден"
//    }
// }

// Translator.prototype.getBulgarianPhrase = function() {
//    return this.phrase
//        .split(" ")
//        .map(function(word) {
//            return this.englishBulgarianDictionary[word]
//        })
//        .join(" ");
// }
 
// const translator = new Translator();
// console.log(translator.getBulgarianPhrase());
