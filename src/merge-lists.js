function checkListValid(list) {
    return list !== undefined
        && list !== null
        && Array.isArray(list)
}

function checkNumberInvalid(value) {
    return value === undefined
        || value === null
        || typeof value !== 'number'
        || Number.isNaN(value);
}

function sortListAscending(list) {
    return [...list]
        .filter(x => !checkNumberInvalid(x))
        .sort((a, b) => a - b);
}

function mergeLists(list1, list2) {
    if (!checkListValid(list1) && !checkListValid(list2)) {
        return [];
    } else if (!checkListValid(list1)) {
        return sortListAscending(list2);
    } else if (!checkListValid(list2)) {
        return sortListAscending(list1);
    } else if (list1.length === 0 && list2.length === 0) {
        return [];
    }

    const validList1 = sortListAscending(list1);
    const validList2 = sortListAscending(list2);

    const merged = [];

    let i = 0;
    let j = 0;

    while ((i < validList1.length) && (j < validList2.length)) {
        if (validList1[i] <= validList2[j]) {
            merged.push(validList1[i]);
            i++;
        } else {
            merged.push(validList2[j]);
            j++;
        }
    }

    while (i < validList1.length) {
        merged.push(validList1[i]);
        i++;
    }

    while (j < validList2.length) {
        merged.push(validList2[j]);
        j++;
    }

    return merged;
}
