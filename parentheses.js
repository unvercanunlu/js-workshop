const pairs = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
    ['<', '>']
]);

const opened = new Set(pairs.keys());
const closed = new Set(pairs.values());

function validationForIsValidParentheses(text) {
    if (text === null || text === undefined || typeof text !== 'string') {
        throw new Error('input should be string!');
    }
}

function isValidParentheses(text) {

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
