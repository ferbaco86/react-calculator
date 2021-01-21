import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const valueOne = Big(numberOne);
  const valueTwo = Big(numberTwo);
  let total = 0;

  switch (operation) {
    case '+':
      total = valueOne.plus(valueTwo);
      break;
    case '-':
      total = valueOne.minus(valueTwo);
      break;
    case 'x':
      total = valueOne.times(valueTwo);
      break;
    case '÷':
      if (valueTwo === 0) {
        total = "Can't divide by zero";
      } else {
        total = valueOne.div(valueTwo);
      }
      break;
    case '%':
      total = valueOne.div(100);
      break;

    default:
      break;
  }
  return total;
};

export default operate;
