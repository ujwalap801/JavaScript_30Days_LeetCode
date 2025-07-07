let filter = function(arr, fn) {
let filterArr = []; 
    for(let i=0;i<arr.length;i++)
    {
        // filterArr[i] = fn(arr[i],i); it returns  => [ false, false, true, true ]

        if (fn(arr[i], i)) {
            filterArr.push(arr[i]); // Only push elements that pass the test
        }
    }

    return filterArr;
    
};

let arr = [0,10,20,30]
const fn = {
  Greather10: function(n) { return n>10; },
  firstIndex :function(n, i) { return i === 0},
  plusOne: function(n){return n+1}
  
}

console.log("Greatherthan10    =>", filter(arr, fn.Greather10));    
console.log("firstIndex    =>", filter(arr, fn.firstIndex));    
console.log("plusOne   =>", filter(arr, fn.plusOne));  
