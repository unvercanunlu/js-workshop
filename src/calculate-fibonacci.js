function checkInputInvalid(input) {
    return input === undefined || input === null
        || typeof input !== "number" || Number.isNaN(input) || !Number.isFinite(input) || !Number.isInteger(input)
        || input < 0;
}

function calculateFibonacci(n) {
    if (checkInputInvalid(n)) {
        throw new Error("Input should be a non-negative number!");
    }

    // base cases
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }

    /* recursive */
    // return calculateFibonacciRecursive(n - 2) + calculateFibonacciRecursive(n - 1);

    /* dynamic programming */
    const store = [0, 1];

    let i = 2;

    while (i <= n) {
        store[i] = store[i - 1] + store[i - 2];
        i++;
    }

    return store[n];
}
