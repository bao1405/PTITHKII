interface Person {
    name: string;
    age: number;
}

interface Address {
    street: string;
    city: string;
}

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
    name: 'John',
    age: 30,
    street: '123 Main St',
    city: 'New York'
};

console.log(personWithAddress); 
