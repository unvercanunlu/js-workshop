function validationForFindMax(values) {
    if (values === null || values === undefined || !Array.isArray(values) || values.length === 0) {
        throw new Error("input should be non-empty array!");
    }
}

function isElementInvalid(element) {
    return element === null || element === undefined || typeof element !== 'number';
}

function findMax(values) {
    validationForFindMax(values);

    let i = 0;
    while (i < values.length && isElementInvalid(values[i])) {
        i++
    }

    if (i >= values.length) {
        return null;
    }

    let max = values[i];

    for (let j = i; j < values.length; j++) {
        if (isElementInvalid(values[j])) {
            continue;
        }

        if (max < values[j]) {
            max = values[j];
        }
    }

    // alternative: max = Math.max(...values);

    return max;
}
