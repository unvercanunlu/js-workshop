function findMax(arr) {
    // input validation
    if (arr === null || arr === undefined) {
        throw new Error("input missing!");
    } else if (typeof arr !== "object" && !Array.isArray(arr)) {
        throw new Error("input should be array!");
    } else if (arr.length === 0) {
        throw new Error("input should not be empty!");
    }

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];

        // element validation
        if (current === null || current === undefined || typeof current !== 'number') {
            continue;
        }

        if (max < current) {
            max = current;
        }
    }

    // alternative: max = Math.max(...arr);

    return max;
}

console.log(findMax([1, 2, 4, 5, -1, 8]))
