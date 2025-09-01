const checkInputInvalid = (input) => {
  return (
    input === undefined ||
    input === null ||
    !Array.isArray(input) ||
    input.length === 0
  );
};

const checkElementInvalid = (element) => {
  return (
    element === undefined ||
    element === null ||
    typeof element !== 'number' ||
    Number.isNaN(element)
  );
};

const findMajority = (values) => {
  if (checkInputInvalid(values)) {
    throw new Error('Input should be non-empty array!');
  }

  const frequencies = new Map();

  for (const number of values) {
    if (checkElementInvalid(number)) {
      console.warn('Element invalid! element=' + number + ' skipping...');
    }

    frequencies.set(number, (frequencies.get(number) || 0) + 1);
  }

  const threshold = frequencies.size / 2;

  for (const [key, value] of frequencies.entries()) {
    if (value > threshold) {
      return key;
    }
  }

  return null;
};
