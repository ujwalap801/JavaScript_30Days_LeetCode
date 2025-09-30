function findMissingNumber(nums) {
    // Your implementation

    let n = nums.length;
    let totalSum = (n * (n + 1)) / 2;
    let partialSum = 0;
    for (let i = 0; i < n; i++)
    {

        partialSum = partialSum + nums[i]

    }

    return totalSum - partialSum;
}

//For the purpose of user debugging.
findMissingNumber([3,0,1]);

module.exports = findMissingNumber