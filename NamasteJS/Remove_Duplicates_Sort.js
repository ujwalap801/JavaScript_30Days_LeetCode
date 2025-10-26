/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    
    let result =[];
  let map = new Map();
    s=s.split('');
    for(let i=0;i<s.length;i++)
    {
        
        if(!map.has(s[i]))
        {
            map.set(s[i], true);
            result.push(s[i]);
        }

    }

   console.log(result);
   console.log(map)
    result.sort((a,b) =>  {
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;
    })

    return result.join("")
};



s = "bcabc";
output ="abc"