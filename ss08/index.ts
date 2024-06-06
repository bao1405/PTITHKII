let a:number = 5;
// để kiểm tra kiểu dữ liệu dùng trong typescript
// kiểu dữ liệu của array là object


//  phân biệt array và object
// không thể dùng typeof được vì cả 2 đều là kiểu object

let b:number[]= [0,1,2,3,4];
console.log(typeof b);
console.log(Array.isArray(a));
console.log(5 | 6);
let text1:string|number = "hello";
text1 = 5;
// union
let arr1:(number|string)[] = [5,"hoa"];
arr1.push(1);
console.log(arr1);
//tuple
let arr2:[number,string] =[5,"hoa"];
arr2.push(6);
console.log(arr2);
// alias
type text = string|number|null|undefined;
let text2:text = "";