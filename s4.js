const obj1 = { a: 1, b: 2 }

const obj2 = { a: 1, b: 2 }
const obj3 =obj2


console.log(obj1 === obj2); 

const a = Object.entries(obj1);
console.log(typeof a);

const b= JSON.stringify(a);
console.log(typeof b);