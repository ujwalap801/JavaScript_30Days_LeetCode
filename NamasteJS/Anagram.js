function isAnagram(s1, s2) {
    // Your implementation
    if (s1.length === 0 && s2.length == 0) return true;

    

s1 = s1.toLowerCase().match(/[^a-z0-9]/i).join('');
s2 = s2.toLowerCase().match(/[^a-z0-9]/i).join('');


// " Dirty room!! ".toLowerCase().replace(/[^a-z0-9]/gi, '')

    
    if (s1.length !== s2.length) return false;


    let map = {};

    for (let i = 0; i < s1.length; i++) {
             if (s1[i].match(/[a-z0-9]/i)) {
            let ch = s1[i];
            if (!map[ch]) {
                map[ch] = 1;
            }
            else {
                map[ch]++
            }
        }
    }


    for (let i = 0; i < s2.length; i++) {
              if (s2[i].match(/[a-z0-9]/i)) {
        let ch = s2[i];

        if (!map[ch] || map[ch] < 0) {
            return false;
        }
        else {
            map[ch]--;
        }
    }
    }

return true;
    
}
//For the purpose of user debugging.
// console.log(isAnagram("listen", "silent"));
console.log(isAnagram(" A ","a "));
console.log(isAnagram("dormitroy!!","dirty room"));


// s1.toLowerCase() → makes all letters lowercase.

// .replace(/[^a-z0-9]/gi, '')

// /[^a-z0-9]/ → matches anything that is NOT a letter or digit.

// g → find all such characters in the string.

// i → case-insensitive (not needed here because we already lowercased, but harmless).

// '' → replace those matches with nothing (remove them).

// Result: s1 now has only lowercase letters and digits, no spaces, punctuation, or symbols.



// s1 = s1.toLowerCase().match(/[a-z0-9]/gi);
// /[a-z0-9]/gi → matches only letters or digits.

// .match() returns an array of matches, not a string.

// You would have to join them back together:

// js
// Copy code
// s1 = s1.toLowerCase().match(/[a-z0-9]/gi).join('');
// This would give the same "dirtyroom" result, but with an extra step.