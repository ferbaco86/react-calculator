import operate from '../../logic/operate';

describe('Operate logic', () => {
  const num1 = 5;
  const num2 = 5;
  it('Addition between two numbers', () => {
    const result = String(operate(num1, num2, '+'));
    expect(result).toBe('10');
  });
  it('Substraction between two numbers', () => {
    const result = String(operate(num1, num2, '-'));
    expect(result).toBe('0');
  });
  it('Division between two numbers', () => {
    const result = String(operate(num1, num2, '÷'));
    expect(result).toBe('1');
  });
  it('Multiplication between two numbers', () => {
    const result = String(operate(num1, num2, 'x'));
    expect(result).toBe('25');
  });
  it('Division by zero', () => {
    const result = String(operate(num1, '0', '÷'));
    expect(result).not.toBe('1');
  });
  it('Message when division is by zero', () => {
    const result = String(operate(num1, '0', '÷'));
    expect(result).toBe("Can't divide by zero");
  });
});
