const convertIntegerToDigits = (n) => {
    const digits = [];

    while (n > 0) {
        const digit = n % 10;
        digits.push(digit);
        n = Math.floor(n / 10);
    }

    return digits;
}

const isIntegerNumber = (n) => {
    return (
        n !== undefined &&
        n !== null &&
        typeof n === 'number' &&
        Number.isInteger(n)
    );
}

const checkHappyNumber = (n) => {
    if (!isIntegerNumber(n) || n <= 0) {
        throw new Error("Input should be a positive number!");
    }

    const seen = new Set();

    seen.add(n);

    while (n !== 1) {
        n = convertIntegerToDigits(n)
            .map(x => x * x)
            .reduce((previous, current) => previous + current, 0)

        if (seen.has(n)) {
            return false;
        }

        seen.add(n);
    }

    return true;
}
