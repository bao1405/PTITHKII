"use strict";
function validatePerson(obj) {
    const { name, age, address } = obj;
    return typeof name === 'string' && typeof age === 'number' && typeof address === 'object';
}
const person1 = { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } };
console.log(validatePerson(person1));
const person2 = { name: 'Alice', age: '25', address: { city: 'Los Angeles', country: 'USA' } };
console.log(validatePerson(person2));
