const PUNCTIATIONS = new Set(
    ['.', ',', '?', "'", ':', ';', '!', '"']
);
const IGNORED = new Set(
    [' ', ...PUNCTIATIONS]
);

function normalize(text) {
    return text.toLowerCase();
}

function checkInputInvalid(input) {
    return input === undefined || input === null
        || typeof input !== 'string';
}

function isPalindrome(text) {
    if (checkInputInvalid(text)) {
        console.error("Input invalid! input=" + text);
        throw new Error("input must be a string!");
    }

    if (text.length <= 1) {
        return true;
    }

    const normalized = normalize(text);

    let i = 0;
    let j = normalized.length - 1;

    while (i < j) {
        while (i < j && IGNORED.has(normalized[i])) {
            i++;
        }

        while (i < j && IGNORED.has(normalized[j])) {
            j--;
        }

        if (normalized[i] !== normalized[j]) {
            return false;
        }

        i++;
        j--;
    }

    return true;
}
