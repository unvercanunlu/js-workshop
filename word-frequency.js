function removePunctiations(text) {
    /*

    const empty = ' ';

    return text.replace('.', empty)
        .replace(',', empty)
        .replace('?', empty)
        .replace("'", empty)
        .replace(':', empty)
        .replace(';', empty)
        .replace('!', empty)
        .replace('"', empty);

    */

    return text.replace(/[.,?':;!"]/g, ' ');
}

function normalize(text) {
    return removePunctiations(
        text.toLowerCase()
    );
}

function checkInputInvalid(input) {
    return input === undefined || input === null
        || typeof input !== 'string'
}

function countWordFrequency(text) {
    if (checkInputInvalid(text)) {
        console.error("Input invalid! input=" + text);
        throw new Error("input must be a string!");
    }

    if (text.length === 0) {
        return {};
    }

    const normalized = normalize(text);

    const splitted = normalized.split(' ')
        .map(word => word.trim())
        .filter(word => word.length !== 0);

    let frequencies = new Map();

    for (let word of splitted) {
        frequencies.set(word,
            (frequencies.get(word) || 0) + 1
        );
    }

    /*

    let result = {};

    for (const word of frequencies.keys()) {
        result[word] = frequencies.get(word);
    }

    return result;

    */

    return Object.fromEntries(frequencies);
}
