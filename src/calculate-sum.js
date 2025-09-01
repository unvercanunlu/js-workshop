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

const calculatSum = (number) => {
  if (checkInputInvalid(number)) {
    throw new Error('Input must be a non-negative integer!');
  }

  /* iterative */
  /*

    let result = 0;

    for(let i=1; i<=number;i++){
        result +=i;
    }
    
    return result;

    */

  /* Gaussian formula */
  return (number * (number + 1)) / 2;
};
