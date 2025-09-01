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

const findMax = (values) => {
  if (checkInputInvalid(values)) {
    throw new Error('Input should be non-empty array!');
  }

  // return Math.max(...values);

  let i = 0;
  while (i < values.length && checkElementInvalid(values[i])) {
    console.warn('Element invalid! element=' + values[i] + ' skipping...');
    i++;
  }

  if (i >= values.length) {
    console.warn('There is no valid element to compare each other!');
    return null;
  }

  let max = values[i];

  for (let j = i; j < values.length; j++) {
    if (checkElementInvalid(values[j])) {
      console.warn('Element invalid! element=' + values[j] + ' skipping...');
      continue;
    }

    max = Math.max(max, values[j]);
  }

  return max;
};
