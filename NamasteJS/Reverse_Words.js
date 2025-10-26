function reverseWords(s) {
    // Your implementation

    s = s.split(" ")
    let ans = [];

    for (let i = 0; i < s.length; i++) {
        let word = s[i];

        if (word.length > 0) {

            let chars = word.split("");

            let n = chars.length;
            let mid = Math.floor(n / 2);
            for (let j = 0; j < mid; j++) {
                let temp = chars[j];
                chars[j] = chars[n - 1 - j];
                chars[n - 1 - j] = temp;

            }
            ans.push(chars.join(""));
        }
        else {
            ans.push(word);

        }

    }

    return ans.join(" ")
}

//For the purpose of user debugging.
reverseWords("Hello World");

module.exports = reverseWords