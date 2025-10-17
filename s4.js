
let arr1 =[3, -4, 5, 4, -1, 7, -8];

function printSubArray(arr)
{
  let n= arr.length;
  let maxSum = -Infinity;
  let currentSum =0;
  for(let i=0;i<n;i++)
  {
    currentSum += arr[i];
    maxSum = Math.max(currentSum, maxSum);
    if(currentSum <0)
    {
      currentSum = 0
    }

  }

  return maxSum;
}


console.log(printSubArray(arr1))