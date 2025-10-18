function validatePalindrome(str) {
    // Your implementation

    let letter = str.toLowerCase().match(/[a-z0-9]/gi) || [];
    str = letter.join("");

    let stack = [];
    for (let i = 0; i < str.length; i++)
    {
        stack.push(str[i]);
    }

    for (let i = 0; i < stack.length; i++)
    {
        if (str[i] !== stack[stack.length - 1 - i])
        {
            return false;
        }
    }

    return true;
}

//For the purpose of user debugging.
validatePalindrome("race a car");

module.exports = validatePalindrome




function validatePalindrome(str) {

    str = str.toLowerCase().match(/[a-z0-9]/gi) || []

 
    let i = 0;
    let j = str.length - 1;
    while (i < j)
    {
        if (str[i] !== str[j])
        {
            return false;
        }
        i++;
        j--;
    }

    return true;
  
}

//For the purpose of user debugging.
validatePalindrome("1234");

// validatePalindrome("")

module.exports = validatePalindrome