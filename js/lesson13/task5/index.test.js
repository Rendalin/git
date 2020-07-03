import { filterNames, arrAverage, transaction, user } from './index.js'

it('Выбрать правильные имена с "на"', () => {
    const result = filterNames(['Максим', 'Маша', 'Екатерина', 'Юллианна'], 'на');

    expect(result).toEqual(['Екатерина', 'Юллианна']);
});

it('Если в массиве нет подходяших элементов', () => {
    const result = filterNames(['Максим', 'Маша', 'Катя', 'Юля'], 'я');

    expect(result).toEqual([]);
})

it('Если не задан второй аргумент', () => {
    const result = filterNames(['Максим', 'Маша', 'Катя', 'Юля']);

    expect(result).toEqual([]);
})


it('Нахождение среднего арифметического числа', () => {
    const result = arrAverage([2, 2]);

    expect(result).toEqual(2);
})

it('Если передан не массив', () => {
    const result = arrAverage(2, 2);

    expect(result).toEqual(null);
})

it('Если передана строка', () => {
    const result = arrAverage('2, 2');

    expect(result).toEqual(null);
})

it('Значение currency', () => {
    const result = transaction.currency;

    expect(result).toEqual('USD');
})

it('Значение country', () => {
    const result = transaction.agent.country;

    expect(result).toEqual('Ukraine');
})

it('Значение operation time', () => {
    const result = transaction['operation time'];

    expect(result).toEqual(1584029990001);
})

it('Значение hobby', () => {
    const result = user.hobby;

    expect(result).toEqual('football');
})

it('Значение favourite music', () => {
    const result = user['favourite music'];

    expect(result).toEqual('rock');
})

it('Значение country', () => {
    const result = user.address['country'];

    expect(result).toEqual('Ukraine');
});