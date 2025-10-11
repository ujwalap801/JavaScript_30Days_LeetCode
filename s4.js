/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function twoSum (nums, target) {
    let i =0;
    let j = nums.length-1;
    let ans=[];

    while(i<=j)
    {
        let sum = nums[i]+nums[j]
        // console.log(j)

        if(sum === target)
        {
            // console.log(j)
           ans.push([i,j]);
        }

        i++;
        j--;
    }

    return ans;
};

console.log(twoSum([2,7,11,15], 9))