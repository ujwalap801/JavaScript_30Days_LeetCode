function curry(fn) {
    // Your implementation

    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args)
        } else {
            return function (...nextArgs) {
                return curried(...args, ...nextArgs)
            }
        }
    }
}

module.exports = curry