function flattenArray(arr) {
    // Your implementation

    let flat = arr.flat(Infinity);
    return flat;
}

//For the purpose of user debugging.
flattenArray([1, [2, [3, 4], 5], 6]);

module.exports = flattenArray