
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

function validationForCountWordFrequency(input) {
    if (input == null || input === undefined || typeof input !== 'string' || input.length == 0) {
        throw new Error("input must be non-empty string!");
    }
}

function countWordFrequency(text) {
    validationForCountWordFrequency(text);

    const normalized = normalize(text);

    const splitted = normalized.split(' ')
        .map(word => word.trim())
        .filter(word => word.length !== 0);

    let frequencies = new Map();

    for (let word of splitted) {
        /*

        let count = frequencies.get(word);

        if(!count){
            count = 0;
        }
        count++;

        frequencies.set(word,count);

        */

        frequencies.set(word, (frequencies.get(word) || 0) + 1);
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
