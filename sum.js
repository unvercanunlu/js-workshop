function validationForSum(number) {
    if (number === null || number === undefined || typeof number !== 'number' 
        || Number.isNaN(number)|| !Number.isFinite(number) || !Number.isInteger(number) || number < 0) {
        throw new Error("input should be non-negative integer number!");
    }
}

function sum(number) {
    validationForSum(number);

    /*
    
    let result = 0
    for (let i = 1; i <= number; i++) {
        result += i;
    }

    return result;
    
    */

    return (number * (number + 1)) / 2;
}
