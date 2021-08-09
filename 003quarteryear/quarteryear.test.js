const quarterOfYear = require('./quarteryear');

test('given a month, return to which quarter of the year it belongs', () => {
    expect(quarterOfYear(2)).toBe(1);
    expect(quarterOfYear(3)).toBe(1);
    expect(quarterOfYear(4)).toBe(2);
    expect(quarterOfYear(5)).toBe(2);
    expect(quarterOfYear(8)).toBe(3);
    expect(quarterOfYear(9)).toBe(3);
    expect(quarterOfYear(11)).toBe(4);
})
