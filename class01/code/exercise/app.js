console.log("===Exercise one===")
let conversionFactor = 0.3048;
let feet = 20;

let convertedValue = feet * conversionFactor;
console.log(convertedValue);

let a = prompt("Enter side a");
let b = prompt("Enter side b");

let parsedA = parseInt(a);
let parsedB = parseInt(b);

let area = parsedA * parsedB;
console.log("The area is: " + area);