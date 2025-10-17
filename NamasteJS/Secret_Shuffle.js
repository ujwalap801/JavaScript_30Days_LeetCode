function decodeSecretCode(s) {
  // your solution
  if (!s || s.length % 2 !== 0 || s.length === 0) return "";

  let result = "";
  for (let i = 0; i < s.length; i +=2)
  {

    const letter = s[i];
    let shift = parseInt(s[i + 1]);

    if (letter >= 'a' && letter <= 'z')
    {
      const newCharCode = letter.charCodeAt(0) + shift;
      result += String.fromCharCode(newCharCode)
    }
  }


  return result;

}

module.exports = { decodeSecretCode };