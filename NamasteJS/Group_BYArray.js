function groupBy(arr, key) {
    // Your implementation
    if (!Array.isArray(arr) || arr.length === 0) {
        return {};
    }

    return arr.reduce((result, item) => {
        const groupKey = item[key];

        if (!result[groupKey]) {
            result[groupKey] = [];
        }

        result[groupKey].push(item);
        return result;
    }, {});

}
groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
],'age');
module.exports = groupBy;