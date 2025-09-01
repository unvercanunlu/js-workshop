function checkNonEmptyArray(input) {
    return input !== undefined && input !== null
        && Array.isArray(input)
        && input.length !== 0;
}

function checkPositiveNumber(element) {
    return element !== undefined && element !== null
        && typeof element === 'number'
        && !Number.isNaN(element)
        && Number.isInteger(element)
        && element > 0;
}

function findTopKFrequent(values, k) {
    if (!checkNonEmptyArray(values)) {
        throw new Error("First parameter should be non-empty array!");
    }

    if (!checkPositiveNumber(k)) {
        throw new Error("Second parameter should be positive number!");
    }

    const frequencies = new Map();

    for (let value of values) {
        frequencies.set(value, (frequencies.get(value) || 0) + 1);
    }

    if (k > frequencies.size) {
        throw new Error("Second parameter should not exceed number of the values!");
    }

    const sorted = Array.from(frequencies.entries())
        .sort((a, b) => b[1] - a[1]);

    return sorted.slice(0, k).map(a => a[0]);
}
