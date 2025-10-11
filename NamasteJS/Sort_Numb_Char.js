
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
