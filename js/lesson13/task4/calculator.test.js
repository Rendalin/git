import { calc } from './calculator.js'

it('should  work correctly with operator "+"', () => {
    const result = calc('2 + 2');

    expect(result).toEqual('2 + 2 = 4');
})
it('should  work correctly with operator "-"', () => {
    const result = calc('2 - 2');

    expect(result).toEqual('2 - 2 = 0');
})
it('should  work correctly with operator "*"', () => {
    const result = calc('2 * 2');

    expect(result).toEqual('2 * 2 = 4');
})
it('should  work correctly with operator "/"', () => {
    const result = calc('2 / 2');

    expect(result).toEqual('2 / 2 = 1');
})
it('If no string is transmitted', () => {
    const result = calc(2 + 2);

    expect(result).toEqual(null);
})