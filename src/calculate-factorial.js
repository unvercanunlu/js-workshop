const checkInputInvalid = (input) => {
  return (
    input === undefined ||
    input === null ||
    typeof input !== 'number' ||
    Number.isNaN(input) ||
    !Number.isFinite(input) ||
    !Number.isInteger(input) ||
    input < 0
  );
};

const calculateFactorial = (n) => {
  if (checkInputInvalid(n)) {
    throw new Error('Input should be a non-negative number!');
  }

  // base case
  if (n === 0) {
    return 1;
  }

  /* recursive */
  // return calculateFactorial(n - 1) * n;

  /* dynamic programming*/
  /*

    const store = [1n];

    let i = 1;

    while (i <= n) {
        store[i] = store[i - 1] * BigInt(i);

        i++;
    }

    return store[i - 1];

    */

  /* iterative */
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= BigInt(i);
  }

  return result;
};
