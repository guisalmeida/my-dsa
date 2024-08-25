const findFirstRecurrent2 = require('../firstRecorrent2');

describe('findFirstRecurrent2', () => {
  it('Should return 2', () => {
    const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4];
    expect(findFirstRecurrent2(arr)).toBe(2);
  });

  it('Should return 1', () => {
    const arr = [2, 1, 3, 1, 2, 3, 5, 1, 2, 4];
    expect(findFirstRecurrent2(arr)).toBe(1);
  });

  it('Should return undefined', () => {
    const arr = [2, 3, 4, 5];
    expect(findFirstRecurrent2(arr)).toBe(undefined);
  });

})