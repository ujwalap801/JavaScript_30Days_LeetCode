function makeCounter(initialValue = 0) {
    // Your implementation

    let counter = initialValue;
    return {
        increment()
        {
return ++counter
        },
        decrement()
        {
return --counter
        },
        reset()
        {
return initialValue
        }
    }


}

module.exports = makeCounter;


// Same

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

    let current = init;
    return {
        increment: function() {
            return ++current;
        },
        decrement: function() {
            return --current;
        },
        reset: function() {
            current = init;
            return current;
        }
    };
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

