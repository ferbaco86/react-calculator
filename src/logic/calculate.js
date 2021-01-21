import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  const calcOperations = ['x', '+', '-', '÷', '%'];

  switch (buttonName) {
    case 'AC':
      total = '0';
      next = '0';
      operation = '';
      break;
    case '+/-':
      next *= -1;
      total *= -1;
      break;
    default:
      break;
  }

  if (calcOperations.includes(buttonName)) {
    total = operate(total, next, buttonName);
  }

  const calculator = {
    total,
    next,
    operation,
  };

  return calculator;
};

export default calculate;
