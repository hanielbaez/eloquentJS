//Implement something like this yourself as a regular function called Promise_all.

function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        let index = 0;
        function loop(promise, result) {
            promise.then(response => {
                result = [...result, response];
                index++;
                if (index === promises.length) {
                    resolve(result);
                } else {
                    loop(promises[index], result);
                }
            }).catch(reject);
        };

        if (promises.length) {
            loop(promises[0], []);
        }else{
            resolve([]);
        }
    });
};

// Test code.
Promise_all([]).then(array => {
    console.log("This should be []:", array);
});
function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
        console.log("We should not get here");
    })
    .catch(error => {
        if (error != "X") {
            console.log("Unexpected failure:", error);
        }
    });
