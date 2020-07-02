import getSum, { getSquaredArray, getOddNumbers } from './calculator.js'

it('Возводим масив в квадрат', () => {
    const result = getSquaredArray([2]);

    expect(result).toEqual([4]);
})

it('Выводим в новый масив все не четные числа', () => {
    const result = getOddNumbers([1, 2, 3, 4, 5]);

    expect(result).toEqual([1, 3, 5]);
})

it('Выводим суму элементов массива', () => {
    const result = getSum(8, 4);

    expect(result).toEqual(12);
})