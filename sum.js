function checkInputInvalid(input) {
    return input === undefined || input === null
        || typeof input !== 'number'
        || Number.isNaN(input) || !Number.isFinite(input) || !Number.isInteger(input)
        || input < 0;
}

function sum(number) {
    if (checkInputInvalid(number)) {
        console.error("Input invalid! input=" + number);
        throw new Error("input must be a non-negative integer!");
    };

    return (number * (number + 1)) / 2;
}
