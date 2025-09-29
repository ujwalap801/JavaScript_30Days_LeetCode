// let s ="Javascript";

let s ="   Hello   woAEld"

function vowels(s)
{
    let vowelArr =['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    s = s.split("");

    let i=0;

    let count =0;
    while(i <s.length)
    {
        if(vowelArr.includes(s[i]))
        {
            count++;

        }
        i++;

    }


    return count;
}


console.log(vowels(s));





function vowels(s) {
    let vowelArr = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let count = 0;

    for (let ch of s) {
        if (vowelArr.has(ch)) {
            count++;
        }
    }
    return count;
}


let s1 = "   Hello   woAEld  JavaScript  ";
let words = s1.split(/\s+/);
console.log(words);


// ["", "Hello", "woAEld", "JavaScript", ""]
