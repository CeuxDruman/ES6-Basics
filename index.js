// Task 1: Introduction

//console.log('Hello, ES6!');





// ---------------------------------------------
// Task 2: Variables (let) and Scoping

console.log("-------- ES5 --------");

console.log(firstName); // You can user a "var" variable before its declaration, it will return "undefined".

var firstName = "Carlos";
console.log(firstName);

var firstName = "Alberto";
console.log(firstName);

firstName = "Carlos";
console.log(firstName);

console.log("-------- ES6 --------");

//console.log(surname); // 1. You can't use a variable before its declaration.

let surname = "Mata";
console.log(surname);

//let surname = "Gil" // 2. You can't re-declare a variable.
surname = "Gil"
console.log(surname);


console.log("-------- var scope (function scope) --------");

var firstName = "Carlos";

function printName() {
    console.log("inside 1: " + firstName);
    firstName = "Carlos A";
    console.log("inside 2: " + firstName);
    var firstName = "Alberto";
    console.log("inside 3: " + firstName);
}
printName();
console.log("outside: " + firstName);

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

var firstName = "Carlos";

function printName() {
    let firstName = "Alberto";
    console.log("inside: " + firstName);
}
printName();
console.log("outside: " + firstName);
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

console.log("-------- Destructuring: for declaring variables from Object's parameters --------");

// Extracting multiple properties on the same line

const recipe = {
    name: "Red Lentil Dahl",
    timeInMinutes: 30,
    ingredients: ["red lentils",
    "cumin",
    "turmeric"]
}

// ES5: Extracting properties one by one
const recipeNameES5 = recipe.name;
const recipeIngredientsES5 = recipe.ingredients;
console.log(recipe, recipeNameES5, recipeIngredientsES5);

// ES6: Extracting multiple properties in 1 line
const { recipeNameES6, recipeIngredientsES6 } = recipe; // This doesn't work because you need to declare the variable with the same name of the object property.
console.log(recipe, recipeNameES6, recipeIngredientsES6); // This returns 'undefined'.

const { name, ingredients } = recipe;
console.log(recipe, name, ingredients);

const { name: recipeNameES6Renamed, ingredients: recipeIngredientsES6Renamed } = recipe; // To "rename" the variable use this.
console.log(recipe, recipeNameES6Renamed, recipeIngredientsES6Renamed);

console.log("-------- Destructuring: for declaring variables from Arrays's elements --------");

// In Arrays, you CAN rename them directly.

const spices = ["cardomom", "turmeric", "cumin"];

const [first, second] = spices;
console.log(first, second);

const [a, b] = spices;
console.log(a, b);

const [sdufh, peoruf] = spices;
console.log(sdufh, peoruf);

// It is not because of the naming "first" and "second".
// It simply returns the first number of elements requested.

console.log("-------- Destructuring: for passing functions parameters from Objects/Arrays --------");

// ES5 --> You have to pass the whole object to the function or destructure it manually before calling the function.
function cook(recipe) {
    console.log(recipe.name);
    console.log(recipe.ingredients);
}

cook(recipe);

// ES6 --> You can destructure it inside the function definition

function cook({ name, ingredients}) { // It takes the name and ingredients for any object you pass to the function
    console.log(name);
    console.log(ingredients);
}

cook(recipe);


// Task 4: Exercise: Extract data with destructuring
console.log("-------- Exercise 4 --------");


const myIngredients = {
    tea: 'black',
    milk: 'soy',
    sweetener: 'honey',
    spices: ['ginger', 'cardamom', 'cinnamon', 'nutmeg']
}

// Destructure the parameters
//function prepareChai(myIngredients) { // Removed
function prepareChai({ tea, spices, milk, sweetener }) { // Solution
    /* // Removed as the old / manual / ES5 way to do it 
    const tea = myIngredients.tea;
    const spices = myIngredients.spices;
    const milk = myIngredients.milk;
    const sweetener = myIngredients.sweetener;
    */
    
    console.log("Mix the " + tea + " tea " +
        "with the " + spices + " in a small pot. " + 
        "Add a cup of water and bring to boil. Boil for 2-3 min. " +
        "Add " + milk + " milk and " + sweetener + ". " + 
        "Simmer for 3 min. Serve masala chai hot or warm!");
}

prepareChai(myIngredients);

console.log("-------- Assigning default values to destructured parameters --------");

const myNewIngredients = {
    milk: 'soy',
    sweetener: 'honey',
    spices: ['ginger', 'cardamom', 'cinnamon', 'nutmeg']
}

function prepareChai({ tea = "regular", spices, milk, sweetener }) {

    console.log("Mix the " + tea + " tea " +
        "with the " + spices + " in a small pot. " + 
        "Add a cup of water and bring to boil. Boil for 2-3 min. " +
        "Add " + milk + " milk and " + sweetener + ". " + 
        "Simmer for 3 min. Serve masala chai hot or warm!");
}

prepareChai(myNewIngredients);

console.log("-------- The 'rest' operator --------");

const mySpices = ["cardomom", "turmeric", "cumin"];

var [ firstOne, ...restOfMySpices ] = mySpices;
console.log(firstOne, restOfMySpices);

var [ firstOne, secondOne, ...restOfMySpices ] = mySpices;
console.log(firstOne, secondOne, restOfMySpices);

console.log("-------- Skipping parameters --------");

var [ ,, thirdSpice ] = mySpices;
console.log(thirdSpice);

var [ , secondSpice ] = mySpices;
console.log(secondSpice);

var [ firstSpace , secondSpice ] = mySpices;
console.log(firstSpace, secondSpice);

var [ firstSpace ,, thirdSpice ] = mySpices;
console.log(firstSpace, thirdSpice);


// ---------------------------------------------
// TASK 5: Strings and Interpolation

console.log("-------- Strings news --------");

const language = "English";
console.log(language.includes("gl")); // true
console.log(language.includes("random")); // false
console.log(language.includes('g')); // true

console.log(language.startsWith("E")); // true
console.log(language.startsWith("e")); // false
console.log(language.startsWith("Eng")); // true

console.log(language.endsWith("sh")); // true
console.log(language.endsWith("sH")); // false

console.log(language.repeat(3)); // EnglishEnglishEnglish

console.log("I speak " + language); // + operator

console.log(`I speak ${language}`) // Literals

console.log(`I speak ${language === "English" ? "British English" : none}`) // Evaluation

console.log(`I speak 
${language === "English" ? "British English" : none}`) // Multi-line




// TASK 5: Exercise: Refactor the code to use the ES6 String utility methods

console.log("-------- Exercise 5 --------");


const country = "Bulgaria";
const city = "Sofia";

//if (country.indexOf("gar") > - 1) {
if (country.includes("gar")) {
    console.log("The country includes gar");
}

//if (city.indexOf("So") === 0) {
if (city.startsWith("So")) {
    console.log("The name starts with So");
}

//if (city.lastIndexOf("a") === city.length - 1) {
if (city.endsWith("a")) {
    console.log("The name ends with a");
}

/*
console.log(
    "The capital of " + country +
    " is the city of " + city
);
*/
console.log(
    `The capital of ${country}
is the city of ${city}`
);









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
