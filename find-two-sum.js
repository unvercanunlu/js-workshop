

function checkInputInvalid(input) {
    return input === undefined || input === null
        || !Array.isArray(input)
        || input.length === 0;
}

function checkElementInvalid(element) {
    return element === undefined || element === null
        || typeof element !== 'number'
        || Number.isNaN(element);
}


function calculateTwoSum(values, target) {
    if (checkInputInvalid(values)) {
        throw new Error("Input should be non-empty array!");
    }

    const indexes = new Map();

    for (let i = 0; i < values.length; i++) {
        const current = values[i];

        if (checkElementInvalid(current)) {
            console.warn("Element invalid! element=" + current + " skipping...");
        }

        const other = target - current;
        const otherIndex = indexes.get(other);

        if (otherIndex !== null && otherIndex !== undefined && otherIndex !== i) {
            return [i, otherIndex];
        }

        indexes.set(current, i);
    }

    return [];
}
