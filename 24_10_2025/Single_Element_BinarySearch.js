function findSingleElement(arr) {

    let left = 0;
    let right = arr.length - 1;
    while (left <= right)
    {
        let mid = Math.floor((left + right) / 2);
        if (mid % 2 !== 0) {
            mid--;
        }

        if (arr[mid] === arr[mid + 1]) {
            left = mid + 2;
        } else {
            right = mid - 1;
        }
    }

    return arr[left];



}

findSingleElement([1, 1, 2])

module.exports = findSingleElement;
