function sum(...args) {
    // Your implementation
    if (args === 0) return 0;

    //     let sum = 0;
    //     for (let i = 0; i < args.length; i++)
    //     {
    //         sum = sum +args[i]
    //     }
    //     return sum
    // }

    let ans = args.reduce((sum, curr) => sum = sum + curr, 0)
    return ans;
}

//For the purpose of user debugging.
sum(100, 200, 300, 400);

module.exports = sum