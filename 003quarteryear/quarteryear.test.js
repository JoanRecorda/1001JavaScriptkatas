const quarterOf = require('./quarteryear');

test('given a month, return to which quarter of the year it belongs', () => {
    expect(quarterOf(2)).toBe(1);
    expect(quarterOf(3)).toBe(1);
    expect(quarterOf(4)).toBe(2);
    expect(quarterOf(6)).toBe(2);
    expect(quarterOf(8)).toBe(3);
    expect(quarterOf(9)).toBe(3);
    expect(quarterOf(11)).toBe(4);
})