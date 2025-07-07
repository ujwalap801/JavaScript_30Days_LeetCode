const arr = [1, 2, 3];

const map = function arrayMap(array) {
    return array.map(n => n + 1);
};

const value = map(arr);// if only value is used then output is [Function: arrayMap]
console.log(value); // Output: [2, 3, 4]


// ORIGINAL SOLUTION
const fn = {
  plusI: function(n, i) { return n + i; },
  plusOne: function(n, i) { return n + 1; },
  constant: function(n, i) { return 42; }
};

let map1 = function(arr, fn) {
 const ans = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        ans[i] = fn(arr[i], i);
    }
    return ans;

};


console.log("plusI     =>", map1(arr, fn.plusI));     // [10, 21, 32]
console.log("plusOne   =>", map1(arr, fn.plusOne));   // [11, 21, 31]
console.log("constant  =>", map1(arr, fn.constant));  // [42, 42, 42]