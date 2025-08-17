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
