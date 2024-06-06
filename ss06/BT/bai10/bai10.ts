const add = (a, b) => {
    const numA = typeof a === 'string' ? parseFloat(a) : a;
    const numB = typeof b === 'string' ? parseFloat(b) : b;
    if (!isNaN(numA) && !isNaN(numB)) {
        return numA + numB;
    }
    else {
        return 'Invalid input';
    }
};
const subtract = (a, b) => {
    const numA = typeof a === 'string' ? parseFloat(a) : a;
    const numB = typeof b === 'string' ? parseFloat(b) : b;
    if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
    }
    else {
        return 'Invalid input';
    }
};
const multiply = (a, b) => {
    const numA = typeof a === 'string' ? parseFloat(a) : a;
    const numB = typeof b === 'string' ? parseFloat(b) : b;
    if (!isNaN(numA) && !isNaN(numB)) {
        return numA * numB;
    }
    else {
        return 'Invalid input';
    }
};
const divide = (a, b) => {
    const numA = typeof a === 'string' ? parseFloat(a) : a;
    const numB = typeof b === 'string' ? parseFloat(b) : b;
    if (!isNaN(numA) && !isNaN(numB)) {
        if (numB !== 0) {
            return numA / numB;
        }
        else {
            return 'Cannot divide by zero';
        }
    }
    else {
        return 'Invalid input';
    }
};
console.log(add(5, 3)); 
console.log(add('5', 3)); 
console.log(add('abc', 3)); 
console.log(subtract(5, 3)); 
console.log(subtract('5', 3)); 
console.log(subtract('abc', 3)); 
console.log(multiply(5, 3)); 
console.log(multiply('5', 3)); 
console.log(multiply('abc', 3)); 
console.log(divide(6, 3));
console.log(divide('6', 3)); 
console.log(divide('abc', 3)); 
console.log(divide(6, 0));