const punctiations = new Set(
    ['.', ',', '?', "'", ':', ';', '!', '"']
);
const ignored = new Set(
    [' ', ...punctiations]
);

function normalize(text) {
    return text.toLowerCase();
}

function validationForIsPalindrome(text) {
    if (text == null || text === undefined || typeof text !== 'string') {
        throw new Error("input must be a string!");
    }
}

function isPalindrome(text) {
    validationForIsPalindrome(text);

    if (text.length <= 1) {
        return true;
    }

    const normalized = normalize(text);

    let i = 0;
    let j = normalized.length - 1;

    while (i < j) {
        while (i < j && ignored.includes(normalized[i])) {
            i++;
        }

        while (i < j && ignored.includes(normalized[j])) {
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
