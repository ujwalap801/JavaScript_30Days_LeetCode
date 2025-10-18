function isAnagram(str1, str2) {
    // Your implementation

    if (str1.length === 0 && str2.length == 0) return true;


    str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');


    if (str1.length !== str2.length) return false;
    let map = {};
    for (let i = 0; i < str1.length; i++) {
        if (!map[str1[i]]) {
            map[str1[i]] = 1;
        } else {
            map[str1[i]]++
        }
    }

    for (let j = 0; j < str2.length; j++) {
        if (!map[str2[j]] || map[str2[j]] < 0) {
            return false
        }
        map[str2[j]]--;
    }

    return true;
}

//For the purpose of user debugging.
isAnagram("listen", "silent");
module.exports = isAnagram