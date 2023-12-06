let phoneCount = parseInt(prompt("Enter phone count "));
let phonePrice = parseInt(prompt("Enter a phone price"));
let taxRate = parseInt(prompt("Enter the tax"));

let phone = 119.95;
let phoneCount1 = 30;
let tax = (phone / 100) * 5;

let result = (phonePrice + taxRate) * phoneCount;
console.log(result );