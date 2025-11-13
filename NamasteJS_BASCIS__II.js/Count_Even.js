function countEvens(arr) {
  // your solution here
  if (!Array.isArray(arr)) return false;
  
  let count = 0;

  for (let i = 0; i < arr.length; i++)
  {
    let val = arr[i];

    if (typeof val !== 'number' || !Number.isFinite(val)) return false;
    if (Number.isInteger(val) && val % 2 === 0)
    {
      count++;
    }
  }
  return count;
}

module.exports = { countEvens };