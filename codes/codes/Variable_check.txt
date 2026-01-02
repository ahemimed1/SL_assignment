
let age = 22;
console.assert(typeof age === 'number', "Age should be a number");
console.assert(age >= 0, "Age should be positive or zero");
console.assert(Number.isInteger(age), "Age should be an integer");


let name = "Ahmed";
console.assert(typeof name === 'string', "Name should be a string");
console.assert(name.length > 0, "Name should not be empty");
console.assert(name === name.trim(), "Name should not have extra spaces");