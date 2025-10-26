function promiseRace(promises) {
    // Your implementation

    return new Promise((resolve, reject) => {

        for (const item of promises)
        {
    Promise.resolve(item).then(resolve).catch(reject)
}
    }
    

    )
}

//For the purpose of user debugging.
//pass appropiate input in below function call.
promiseRace();
module.exports = promiseRace



function promiseRace(promises) {
    // Your implementation

    return new Promise((resolve, reject) => {

        for (const item of promises)
        {
    Promise.resolve(item).then(resolve,reject)
}
    }
    

    )
}

//For the purpose of user debugging.
//pass appropiate input in below function call.
promiseRace();
module.exports = promiseRace