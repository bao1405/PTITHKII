interface Square {
    kind: 'square';
    sideLength: number;
}

interface Circle {
    kind: 'circle';
    radius: number;
}
type Shape = Square | Circle;
function isSquare(shape: Shape): shape is Square {
    return shape.kind === 'square';
}

function isCircle(shape: Shape): shape is Circle {
    return shape.kind === 'circle';
}

function calculateArea(shape: Shape): number {
    if (isSquare(shape)) {
        return shape.sideLength ** 2;
    } else if (isCircle(shape)) {
        return Math.PI * shape.radius ** 2;
    } else {
        throw new Error("Invalid shape");
    }
}

const square: Square = { kind: 'square', sideLength: 5 };
const circle: Circle = { kind: 'circle', radius: 3 };

console.log(calculateArea(square)); 
console.log(calculateArea(circle));