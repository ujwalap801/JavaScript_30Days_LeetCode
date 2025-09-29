
function removeElement(nums, val) {
    let ans =[];
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i] !==val)
        {
            ans.push(nums[i]);
        }
    }

    return ans;
    
};

console.log(removeElement([1, 1, 2], 2))




function removeElement1(nums, val) {
    
    let x =0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i] != val)
        {
            nums[x] = nums[i];
            x =x+1;
        }
    }

 return nums.slice(0, x);
    // return x;
    
};

console.log(removeElement1([1, 1, 2], 2))
