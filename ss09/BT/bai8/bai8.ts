interface A {
    propA: number;
}

interface B {
    propB: string;
}

function mergeObjects(obj1: A, obj2: B): A & B {
    return { ...obj1, ...obj2 };
}

const objA: A = { propA: 10 };
const objB: B = { propB: "Hello" };

const mergedObj: A & B = mergeObjects(objA, objB);
console.log(mergedObj); 
