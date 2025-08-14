// Custom comparator to compare concatenated strings
function myCompare(s1, s2) {
    return (s1 + s2) > (s2 + s1);
}

// Function to return the largest concatenated number
function findLargest(arr) {
    
    // Convert the array elements to strings
    let numbers = arr.map(String);
    console.log(numbers);

    // Sort the array using the custom comparator
    numbers.sort((s1, s2) => myCompare(s1, s2) ? -1 : 1);

    // Handle the case where all numbers are zero.
    // We are sorting in descending order, so zero 
    // in front means the complete array contains zero
    if (numbers[0] === "0") {
        return "0";
    }

    // Concatenate the sorted array
    return numbers.join('');
}

// Driver Code
let arr = [3, 30, 34, 5, 9];
console.log(findLargest(arr));

function sortArr(arr)
{
    return arr.sort((a,b) =>b-a);
}

console.log(sortArr(arr));



// -1 → "Yes, keep a in front"

// Return value	Meaning	Effect
// < 0 (negative)	a comes before b	Swap not needed if a already first
// > 0 (positive)	a comes after b	Swap needed if a is first
// 0	Keep their order (they’re “equal”)
// 1 → "No, move a after b"
// O(N log N)
// .sort() by default sorts strings lexicographically ("100" before "2").

// The (a, b) => b - a callback tells .sort() to compare numerically, in descending order.

// How it works:

// If b - a > 0 → b is bigger than a, so put b before a.

// This results in the largest number first, smallest last.