const checkInputInvalid = (input) => {
  return input === null || input === undefined || !Array.isArray(input);
};

const containDuplicate = (values) => {
  if (checkInputInvalid(values)) {
    throw new Error('Input should be an array!');
  }

  const set = new Set();

  for (let i = 0; i < values.length; i++) {
    if (set.has(values[i])) {
      return true;
    }

    set.add(values[i]);
  }

  return false;
};
