function findMaxNumber(arr) {
    // Your implementation

    let maxNum = -Infinity;
    if (arr.length === 0) return null;
    if (arr.length === 1) return arr[0];

    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > maxNum)
        {
            maxNum = arr[i];
        }

       
    }
    return maxNum;
    
}

//For the purpose of user debugging.
findMaxNumber([1, 2, 3, 4, 5]);

module.exports = findMaxNumber