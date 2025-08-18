const PAIRS = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
    ['<', '>']
]);

const OPENED = new Set(PAIRS.keys());
const CLOSED = new Set(PAIRS.values());

function checkInputInvalid(input) {
    return input === null || input === undefined
        || typeof input !== 'string';
}

function isValidParentheses(text) {
    if (checkInputInvalid(text)) {
        console.error("Input invalid! input=" + text);
        throw new Error('input should be a string!')
    }

    const stack = [];

    for (const character of text) {
        if (!OPENED.has(character) && !closed.has(character)) {
            console.warn("Character neither opened nor closed parentheses! character=" + character + " skipping...");
            continue;
        } else if (OPENED.has(character)) {
            stack.push(character);
        } else if (closed.has(character)) {
            if (stack.length === 0) {
                return false;
            }

            let last = stack.pop();

            if (!OPENED.has(last) || (PAIRS.get(last) !== character)) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
