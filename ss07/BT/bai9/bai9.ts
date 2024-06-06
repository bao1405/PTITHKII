
function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function allElementsArePrimes(arr: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (!isPrime(arr[i])) {
            return false;
        }
    }
    return true;
}

console.log(allElementsArePrimes([1,3,4,2,7,9,32,43,12,45])); 
console.log(allElementsArePrimes([3,5,7,11,13]));
