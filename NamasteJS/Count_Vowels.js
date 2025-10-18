


function countVowels(str) {
    // Your implementation
    if (str.length === 0) return 0;
    let count = str.match(/[aeiou]/gi);
    if (count === null) return 0;
  
    return count.length;
   
}


//For the purpose of user debugging.
countVowels("JavaScript");

module.exports = countVowels





function countVowels(str) {
    // Your implementation
    if (str.length === 0) return 0;
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    // let vowels ="aeiouAEIOU"
    let count = 0;
    // for (let n of str)
    // {

    //     if (vowels.includes(n))
    //     {
    //         count++;
    //     }
    // }

    for (let n of str) {

        if (vowels.includes(n)) {
            count++;
        }
    }
    return count;

}

//For the purpose of user debugging.
console.log(countVowels("JavaScript"));

module.exports = countVowels


// Second

function countVowels(str) {
    // Your implementation
    if (str.length === 0) return 0;

    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (ch.match(/[aeiou]/gi)) {
            count++;
        }
    }
    return count;
}

//For the purpose of user debugging.
countVowels("JavaScript");

module.exports = countVowels