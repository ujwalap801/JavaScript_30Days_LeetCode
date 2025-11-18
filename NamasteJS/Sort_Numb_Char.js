
function customSort(arr) {
  //write your implementation here
  if(!Array.isArray(arr) ||arr.length ===0) return []

  let chars = [];
  let nums = [];

  for (let i = 0; i < arr.length; i++)
  {
    let el = arr[i];
    if (typeof el === 'string')
    {
      chars.push(el)
    } else if (typeof el === "number")
    {
      nums.push(el);
    }
  }

  function bubbleSort(arr, compareFn) {
    for (let i = 0; i < arr.length-1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (compareFn(arr[j], arr[j + 1]) > 0) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp
        }
      }
    }

  }

    bubbleSort(chars, (a, b) => (a > b ? 1 : a < b ? -1 : 0))
  bubbleSort(nums, (a,b)=>a-b)


    return [...chars, ...nums]

}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
customSort(input);
module.exports = customSort;



// USING BUILT IN SORT
function customSort(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  // Separate strings and numbers
  const chars = arr.filter(el => typeof el === 'string');
  const nums = arr.filter(el => typeof el === 'number');

  // Sort strings alphabetically
  chars.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

  // Sort numbers ascending
  nums.sort((a, b) => a - b);

  // Combine results
  return [...chars, ...nums];
}

// const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
console.log(customSort(input)); 
// Output: ["a", "c", "e", "g", "s", 1, 2, 5, 6]

module.exports = customSort;


// USING SELECTION SORT

function customSort(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  // Separate strings and numbers
  const chars = [];
  const nums = [];

  for (let el of arr) {
    if (typeof el === 'string') chars.push(el);
    else if (typeof el === 'number') nums.push(el);
  }

  // Selection Sort for strings
  for (let i = 0; i < chars.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < chars.length; j++) {
      if (chars[j] < chars[minIdx]) minIdx = j;
    }
    [chars[i], chars[minIdx]] = [chars[minIdx], chars[i]];
  }

  // Selection Sort for numbers
  for (let i = 0; i < nums.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIdx]) minIdx = j;
    }
    [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
  }

  // Merge and return
  return [...chars, ...nums];
}

// const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
console.log(customSort(input)); 
// ["a","c","e","g","s",1,2,5,6]

module.exports = customSort;


