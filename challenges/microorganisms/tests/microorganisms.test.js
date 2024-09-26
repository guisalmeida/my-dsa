const largestFamily = require('../microorganisms-naive');

describe('largestFamily', () => {
  it('Should return family B 10', () => {
    const microorganismsFamilies = ["A", "B", "C"];
    const microorganismsSizes = [3, 5, 2];
    expect(largestFamily(microorganismsFamilies, microorganismsSizes)).toEqual('B 10')
  });
})