function removePunctuations(text) {
    return text.replace(/[.,?:;!"]/g, ' ')
        .replace(/['’]/g, ''); // for don't
}

function checkInputInvalid(input) {
    return input === undefined || input === null
        || typeof input !== 'string'
}

function countWordFrequency(text) {
    if (checkInputInvalid(text)) {
        console.error("Input invalid! input=" + text);
        throw new Error("Input must be a string!");
    }

    if (text.length === 0) {
        return {};
    }

    const normalized = removePunctuations(text)
        .trim()
        .toLowerCase();

    if (normalized.length === 0) {
        return {};
    }

    const splitted = normalized.split(/\s+/)
        .map(word => word.trim())
        .filter(word => word.length !== 0);

    if (splitted.length === 0) {
        return {};
    }

    const frequencies = new Map();

    for (const word of splitted) {
        frequencies.set(word,
            (frequencies.get(word) || 0) + 1
        );
    }

    /* iterative */
    /*

    const result = {};

    for (const word of frequencies.keys()) {
        result[word] = frequencies.get(word);
    }

    return result;

    */

    return Object.fromEntries(frequencies);
}
