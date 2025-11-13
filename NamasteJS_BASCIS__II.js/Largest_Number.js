function findLargest(arr) {
  // your solution here
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;

  let max;
  for (let i = 0; i < arr.length; i++)
  {
    let val = arr[i];
    if (typeof val !== 'number' || !Number.isFinite(val)) return false;

    if (max === undefined || val > max) max = val;
  
  }

  return max;
}

module.exports = { findLargest };
