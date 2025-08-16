function sum(n) {
    if (typeof n !== 'number') {
        throw new Error("n should be number!");
    } else if (Number.isNaN(n) || Number.isFinite(n) || !Number.isInteger(n)) {
        throw new Error("n should be integer number!");
    } else if (n < 0) {
        throw new Error("n should be non-negative number!");
    }

    /*
    
    let result = 0
    for (let i = 1; i <= n; i++) {
        result += i;
    }

    return result;
    
    */

    return (n * (n + 1)) / 2;
}

const inputs = [
    undefined,
    null,
    'a',
    [1, 2, 3],
    { a: 1, b: 2 },
    0.9,
    -1,
    10,
    10000000000
];

console.log("There are " + inputs.length + " test cases.");

inputs.forEach(input => {
    try {
        let result = sum(input);
        console.log("input: " + input + ", result: " + result);
    } catch (error) {
        console.error("input: " + input + ", error: " + error.message)
    }
});
