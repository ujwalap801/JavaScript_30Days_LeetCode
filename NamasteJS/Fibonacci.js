function generateFibonacci(n) {
    let fib = [0, 1];
    if (n <= 0) return [];
    if (n == 1) return [0];
    if (n == 2) return fib;

    for (let i = 2; i < n; i++) {

     fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib;
  
}

module.exports = { generateFibonacci };


function getFib(n)
{
    if(n<=1) return n;

    return getFib(n-1) + getFib(n-2);


}


function getFibNumber(n)
{

    let ans =[];
    for(let i=0;i<n;i++)
    {
     ans.push(getFib(i));
    }

    return ans;
}


console.log(getFibNumber(5));