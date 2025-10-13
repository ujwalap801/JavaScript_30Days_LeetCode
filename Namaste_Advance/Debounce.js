function debounce(fn, delay) {
    let timer;

    return function (...args) {
        const context = this; 

        clearTimeout(timer); 

        timer = setTimeout(() => {
            fn.apply(context, args); 
        }, delay);
    };
}

// For testing/debugging
const debounceLog = debounce(console.log, 5000);

debounceLog("hello");
debounceLog("hi");
debounceLog("hey");

module.exports = debounce;
