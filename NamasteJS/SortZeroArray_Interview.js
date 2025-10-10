let arr = [0, 1, 1, 0, 1, 1, 0];

let left = 0;
let right = arr.length - 1;

while (left < right) {
    // Move left forward if it's already 0
    while (arr[left] === 0 && left < right) {
        left++;
    }

    // Move right backward if it's already 1
    while (arr[right] === 1 && left < right) {
        right--;
    }

    // Swap 1 at left with 0 at right
    if (left < right) {
        // [arr[left], arr[right]] = [arr[right], arr[left]];

        let temp =arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

console.log(arr); // Output: [0, 0, 0, 1, 1, 1, 1]
