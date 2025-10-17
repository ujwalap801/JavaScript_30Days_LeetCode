let n = nums.length;
    let maxSum = -Infinity;
    let currSum =0;
    for(let i=0;i< n;i++)
    {
        currSum += nums[i];
        maxSum = Math.max(currSum, maxSum);
        if(currSum <0)
        {
            currSum =0;
        }

    }

    return maxSum;