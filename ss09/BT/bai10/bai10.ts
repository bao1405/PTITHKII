interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: string;
}

const employee: Employee = {
    name: 'John',
    age: 30,
    employeeId: 'E12345'
};

console.log(employee);
