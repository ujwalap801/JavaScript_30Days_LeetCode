function memoize(fn) {
    // write code here

    const cache = new Map();

    return function (...args)
    {
        const key = args.map(a => {
            if (typeof a === 'object' && a !== null) {
                return JSON.stringify(Object.entries(a).sort())
            }

            return JSON.stringify(a)
        }).join("|");

        if (cache.has(key))
        {
            return cache.get(key);
        }


        const result = fn(...args);
        cache.set(key, result);
        return result;

    }
}

memoize();
module.exports = memoize;