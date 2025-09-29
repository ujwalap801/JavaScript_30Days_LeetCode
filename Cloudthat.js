let s = 'cloudthat';

function reverseString(s) {
    let arr = ['a', 'e', 'i', 'o', 'u'];

    s = s.split("");

    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (arr.includes(s[i])) {
            i++;
        }
        else if (arr.includes(s[j])) {
            j--;
        } else {
            let temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        }

    }

    return s.join("");
}

console.log(reverseString(s))

