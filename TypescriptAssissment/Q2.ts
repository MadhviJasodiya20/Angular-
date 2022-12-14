//Q2) Create an arrow function by which you have to sort the given
//numbers.

let arr=[1,3,2];

let Sorting  = (n:number[]) => {return n.sort((a,b) => a-b)};

console.log(Sorting(arr));