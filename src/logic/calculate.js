import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  const calculator = {
    total,
    next,
    operation,
  };

  const calcOperations = ['x', '+', '-', '÷', '%'];

  switch (buttonName) {
    case 'AC':
      calculator.total = '0';
      calculator.next = '0';
      calculator.operation = '';
      break;
    case '+/-':
      calculator.next *= -1;
      calculator.total *= -1;
      break;
    default:
      break;
  }

  if (calcOperations.includes(buttonName)) {
    calculator.total = operate(calculator.total, calculator.next, buttonName);
  }

  return calculator;
};

export default calculate;
