interface Person {
    name: string;
    age: number;
    address: object;
}

function validatePerson(obj: any): boolean {
    const { name, age, address } = obj as Person;
    return typeof name === 'string' && typeof age === 'number' && typeof address === 'object';
}

const person1 = { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } };
console.log(validatePerson(person1)); 

const person2 = { name: 'Alice', age: '25', address: { city: 'Los Angeles', country: 'USA' } };
console.log(validatePerson(person2)); 
