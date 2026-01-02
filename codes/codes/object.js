
let person = {
    name: "Ahmed",
    age: 21,
    email: "Ahmedhemimed2003@gmail.com"
};

console.assert(person !== null && typeof person === 'object', 
               "Person should be an object");
console.assert('name' in person, "Person should have name property");
console.assert('age' in person, "Person should have age property");
console.assert(typeof person.age === 'number', "Age should be a number");
console.assert(person.age >= 0, "Age should be positive");

// config file check

let config = {
    timeout: 5000,
    retries: 3,
    debug: false
};

console.assert(config.timeout > 0, "Timeout should be positive");
console.assert(config.retries >= 0, "Retries should not be negative");
console.assert(typeof config.debug === 'boolean', "Debug should be boolean");