const sum = require('../sum');

describe('Sum function using recursion', () => {
  it('Should return 12', () => {
    const arr = [2,4,6]
    expect(sum(arr)).toBe(12);
  });
  
  it('Should return the value of the first element when array has length equals to 1', () => {
    const arr = [2]
    expect(sum(arr)).toBe(2);
  });

  it('Should return 0 when array is empty', () => {
    const arr = []
    expect(sum(arr)).toBe(0);
  });
})