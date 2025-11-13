

// A-65, Z-90
// a-97 z-122
function generateAtoZ() {
  // your solution here
  let arr = [];
  let start = 65;
  let end = 90;
  while (start <= end)
  {
    arr.push(String.fromCharCode(start));
    start++;
  }

  return arr;

}

module.exports = { generateAtoZ };



// SECOND WAY
function generateAtoZ() {
  // your solution here
  let arr = [];
  let start = 'A'.charCodeAt(0);
  let end = 'Z'.charCodeAt(0);
  while (start <= end)
  {
    arr.push(String.fromCharCode(start));
    start++;
  }
  
  return arr;

}

module.exports = { generateAtoZ };