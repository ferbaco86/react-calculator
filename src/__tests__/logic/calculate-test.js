import calculate from '../../logic/calculate';

const mockCalcData = {
  total: '25',
  next: '2',
  operation: null,
};

describe('Calculate logic', () => {
  it('Restores everything to null', () => {
    const newCalcData = calculate(mockCalcData, 'AC');
    expect(newCalcData.total).toBe(null);
    expect(newCalcData.next).toBe(null);
    expect(newCalcData.operation).toBe(null);
  });
  it('Changes number sign', () => {
    const newCalcData = calculate(mockCalcData, '+/-');
    expect(newCalcData.total).toBe(-25);
  });
  it('Returns the percentage of the provided number', () => {
    const newCalcData = calculate(mockCalcData, '%');
    expect(newCalcData.next).toBe('0.02');
  });
  it('Adds a point to the number', () => {
    const newCalcData = calculate(mockCalcData, '.');
    expect(newCalcData.next).toBe('2.');
  });
  it('Addition between total and next', () => {
    const data = {
      total: '25',
      next: '2',
      operation: '+',
    };
    const newCalcData = calculate(data, '=');
    expect(newCalcData.total).toBe('27');
  });
  it('Substraction between total and next', () => {
    const data = {
      total: '25',
      next: '2',
      operation: '-',
    };
    const newCalcData = calculate(data, '=');
    expect(newCalcData.total).toBe('23');
  });
  it('Division between total and next', () => {
    const data = {
      total: '20',
      next: '2',
      operation: '÷',
    };
    const newCalcData = calculate(data, '=');
    expect(newCalcData.total).toBe('10');
  });
  it('Multiplication between total and next', () => {
    const data = {
      total: '20',
      next: '2',
      operation: 'x',
    };
    const newCalcData = calculate(data, '=');
    expect(newCalcData.total).toBe('40');
  });
  it('Appends a new number to the next number', () => {
    const newCalcData = calculate(mockCalcData, '1');
    expect(newCalcData.next).toBe('21');
  });
});
