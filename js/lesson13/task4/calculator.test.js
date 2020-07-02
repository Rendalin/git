import { calc } from './calculator.js'

it('Работа +', () => {
    const result = calc('2 + 2');

    expect(result).toEqual('2 + 2 = 4');
})
it('Работа -', () => {
    const result = calc('2 - 2');

    expect(result).toEqual('2 - 2 = 0');
})
it('Работа *', () => {
    const result = calc('2 * 2');

    expect(result).toEqual('2 * 2 = 4');
})
it('Работа /', () => {
    const result = calc('2 / 2');

    expect(result).toEqual('2 / 2 = 1');
})
it('Если передана не строка', () => {
    const result = calc(2 + 2);

    expect(result).toEqual(null);
})