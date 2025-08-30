

function checkNonEmptyArray(input) {
    return input !== undefined && input !== null
        && Array.isArray(input)
        && input.length !== 0;
}

function checkNonNegativeNumber(element) {
    return element !== undefined && element !== null
        && typeof element === 'number'
        && !Number.isNaN(element);
}

function calculateTwoSum(values, target) {
    if (!checkNonEmptyArray(values)) {
        throw new Error("First parameter should be non-empty array!");
    }

    if (!checkNonNegativeNumber(target)) {
        throw new Error("Second parameter should be number!");
    }

    const indexes = new Map();

    for (let i = 0; i < values.length; i++) {
        const current = values[i];

        if (!checkNonNegativeNumber(current)) {
            throw new Error("Array elements must be valid numbers!");
        }

        const complement = target - current;
        const complementIndex = indexes.get(complement);

        if (complementIndex !== null && complementIndex !== undefined && complementIndex !== i) {
            return [i, complementIndex];
        }

        indexes.set(current, i);
    }

    return [];
}
