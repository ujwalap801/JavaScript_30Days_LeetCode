let reduce = function(nums, fn, init) {
    if(nums.length === 0)
    {
        return init;
    }
    
    let val = init;
    for(let i=0;i<nums.length;i++)
    {
        val = fn(val,nums[i]);
        console.log(val);

    }

return val;
};


let nums = [1,2,3,4]
 const fn = function sum(accum, curr) { return accum + curr; }
let init = 0

let result = reduce(nums,fn, init);
console.log(result);