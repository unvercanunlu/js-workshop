const PUNCTIATIONS = new Set(['.', ',', '?', "'", ':', ';', '!', '"']);
const IGNORED = new Set([' ', ...PUNCTIATIONS]);

const normalize = (text) => {
  return text.toLowerCase();
};

const checkInputInvalid = (input) => {
  return input === undefined || input === null || typeof input !== 'string';
};

const checkPalindrome = (text) => {
  if (checkInputInvalid(text)) {
    throw new Error('Input must be a string!');
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
};
