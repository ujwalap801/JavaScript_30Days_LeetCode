function removeDuplicates(arr) {
  // your code here
  if (arr.length == 0) return [];

  let map = {};
  let ans = [];
  for (let i = 0; i < arr.length; i++)
  {
    if (!map[arr[i]])
    {
      map[arr[i]] = arr[i];
      ans.push(arr[i]);
    }
  }


  return ans;
}

// console.log(removeDuplicates([1,"1",1]))




function removeDuplicates1(arr) {
  // your code here

  let set = new Set();
  for (let i = 0; i < arr.length; i++)
  {
    set.add(arr[i]);
  }


console.log(set)
  return [...set]; //Wrapping it in [...] creates a new array containing those elements.
}



console.log(removeDuplicates1([1,"1",1]))




const myObject = { a: 'apple', b: 'banana', c: 'cherry' };

// Get an array of keys
const keysArray = Object.keys(myObject);
console.log(keysArray); // Output: ['a', 'b', 'c']

// Get an array of values
const valuesArray = Object.values(myObject);
console.log(valuesArray); // Output: ['apple', 'banana', 'cherry']

// Get an array of [key, value] pairs
const entriesArray = Object.entries(myObject);
console.log(entriesArray); // Output: [['a', 'apple'], ['b', 'banana'], ['c', 'cherry']]