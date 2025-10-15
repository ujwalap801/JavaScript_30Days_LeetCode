function capitalizeWords(s) {
    // Your implementation

    s = s.trim().toLowerCase().split(/\s+/);

    let result = [];
    for (let i = 0; i < s.length; i++)
    {
        let word = s[i];
        if (word.length > 0)
        {
            let newWord = word[0].toUpperCase() + word.slice(1);
            result.push(newWord);

        } else {
            result.push("");
        }
    }

return result.join(' ')

}

//For the purpose of user debugging.
capitalizeWords("hello world");
module.exports = capitalizeWords