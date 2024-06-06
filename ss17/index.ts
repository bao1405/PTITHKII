/*
    kiểu dữ liệu generics <>
*/ 
// viết 1 function reverse các phần tử trong mảng
/*
    input :[1,2,3,4,5]
    outpu: [5,4,3,2,1]
*/ 

function reverse<T>(param:Array<T>):T[]{
    return param.reverse();
}

let result = reverse([1,2,3,4,5]);
let result1 = reverse(["nhung","hong","hoa"])

console.log(result);
console.log(result1);

/*
    viết 1 function trả về 1 mảng chứa 2 phần tử
    input:5,6
    output:[5,6]
    input:5,"hoa"
    output:[5,"hoa"]
    input:"hoa","hong"
    output:["hoa","hong"]
*/ 

function reverse1<T,U,K>(param1:T,param2:U,param3:K):[T,U,K] {
    return [param1,param2,param3]
}
let test = reverse1(5,6,7);
let test1 = reverse1(5,"hoa",7);
let test2 = reverse1("hoa","hong",7);
console.log(test);
console.log(test1);
console.log(test2);

