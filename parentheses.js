const pairs = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
    ['<', '>']
]);

const opened = new Set(pairs.keys());
const closed = new Set(pairs.values());

function checkInputInvalid(input) {
    return input === null || input === undefined
        || typeof input !== 'string';
}

function isValidParentheses(text) {
    if (checkInputInvalid(text)) {
        throw new Error('input should be string!')
    }

    let stack = [];

    for (let i = 0; i < text.length; i++) {
        if (!opened.has(text[i]) && !closed.has(text[i])) {
            continue;
        } else if (opened.has(text[i])) {
            stack.push(text[i]);
        } else if (closed.has(text[i]) && pairs.get(stack.pop()) !== text[i]) {
            return false;
        }
    }

    return stack.length === 0;
}
