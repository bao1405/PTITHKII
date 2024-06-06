function type(a:number | string):number|string{
    if(typeof a === 'number' || typeof a === 'string')
        return typeof a
    else return "không phải chữ hay số"
}

console.log(type(10));


let number:number[] = []
let number1:Array<number> = []

function test(a:number | number[]|string[]): string|(number|string)[]{
    if(typeof a === 'number'){
        return [a]
    }
    else if(Array.isArray(a)) return [a[a.length - 1]]
    else return "không phải chữ số"
}

console.log(test(1));
console.log(test([1,2,3]));

let generic1 = Array<number>
let generic2 = Array<string>
let generic3 = <T>(param:T) => {
    return param
}

console.log(generic3(5));
console.log(generic3("number"));
console.log(generic3(null));

let test1 = <A>(a:A|A[]):[A] => {
    if(Array.isArray(a)){
        return [a[a.length - 1]]
    }else{
        return [a]
    }
}

console.log(test1([3,4,123]));
console.log(test1(1));
