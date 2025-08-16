function sum(n) {
    validationForSum(n);

    /*
    
    let result = 0
    for (let i = 1; i <= n; i++) {
        result += i;
    }

    return result;
    
    */

    return (n * (n + 1)) / 2;
}

function validationForSum(n) {
    if (n === null || n === undefined) {
        throw new Error("input missing!");
    } else if (typeof n !== 'number') {
        throw new Error("input should be number!");
    } else if (Number.isNaN(n) || !Number.isFinite(n) || !Number.isInteger(n)) {
        throw new Error("input should be integer number!");
    } else if (n < 0) {
        throw new Error("input should be non-negative integer number!");
    }
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
    10000000
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
