// function sum(a, b, c)
// {
//   return a+b+c;
// }

// function curry(a, b,sum)
// {

//  return sum(a, b, sum)
// }



// const carriedSum = curry(sum);
// console.log(carriedSum(1,2,3))


function add(x,y)
{
  return x+y;
}

function calculateSum(x, y, operation)
{
  return operation(x,y);
}

console.log(calculateSum(1, 2, add))


function sum(a, b, c)
{
  return a+ b+c;
}


const curriedSum = curry(sum)

curriedSum(1)(2)(3)
curriedSum(1, 2)(3)
curriedSum(1)(2, 3)
curriedSum(1, 2, 3)