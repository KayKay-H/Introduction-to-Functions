//Declaring and Invoking Functions
function greet (name = "Krystal") {
    return "Hello, " + name +"!";
}
console.log(greet ("Krystal"));

//Working with Parameters and Returning Values
function addNumbers(num1, num2) {
    return num1 + num2;
}
let result = addNumbers(23, 24);
console.log(result)

//Function Scope
let x = 10;
function changeValue(){
    x = 582023;
    console.log("x inside the function:", x);
}
console.log("x outside the function:", x);
changeValue();

console.log("x outside the function:", x);

//Closures
function outerFunction() {
    let count = 0
    return function innerFunction() {
        count++;
        console.log("Count:", count)
    };
}
let newFunction = outerFunction();
newFunction();
newFunction();
newFunction();
newFunction();
newFunction();
newFunction();
newFunction();
newFunction();
newFunction();
newFunction();