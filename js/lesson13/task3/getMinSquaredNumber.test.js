import getMinSquaredNumber from './getMinSquaredNumber'

it('Bозвращать квадрат минимального по модулю числа', () => {
    const result = getMinSquaredNumber([11, -2, 3, 4]);

    expect(result).toEqual(4);
})

it('передать пустой массив', () => {
    const result = getMinSquaredNumber([]);

    expect(result).toEqual(null);
})

it('передать строку', () => {
    const result = getMinSquaredNumber('string');

    expect(result).toEqual(null);
})