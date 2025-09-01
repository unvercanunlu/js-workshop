const isValidArray = (value) => {
    return (
        value !== null &&
        value !== undefined &&
        Array.isArray(value)
    );
};

const moveZeros = (values) => {
    if (!isValidArray(values)) {
        throw new Error("Input should be an array!");
    }

    const result = [];

    let zeroCount = 0;

    for (let i = 0; i < values.length; i++) {
        if (values[i] === 0) {
            zeroCount++;
            continue;
        }

        result.push(values[i]);
    }

    for (let i = 1; i <= zeroCount; i++) {
        result.push(0);
    }

    return result;
}


const moveZerosV2 = (values) => {
    if (!isValidArray(values)) {
        throw new Error("Input should be an array!");
    }

    for (let i = 0; i < values.length; i++) {
        if (values[i] === 0) {
            let nonZeroIndex = i + 1;

            while (values[nonZeroIndex] === 0) {
                nonZeroIndex++;
            }

            if (nonZeroIndex >= values.length) {
                break;
            }

            values[i] = values[nonZeroIndex];
            values[nonZeroIndex] = 0;
        }
    }

    return values;
}

const moveZerosV3 = (values) => {
    if (!isValidArray(values)) {
        throw new Error("Input should be an array!");
    }

    let insertIndex = 0;

    for (let i = 0; i < values.length; i++) {
        if (values[i] !== 0) {
            values[insertIndex] = values[i];
            insertIndex++;
        }
    }

    for (let i = insertIndex; i < values.length; i++) {
        values[i] = 0;
    }

    return values;
}
