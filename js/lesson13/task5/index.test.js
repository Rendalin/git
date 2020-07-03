import { filterNames } from './index.js'

it('Выбрать правильные имена с "я"', () => {
    const result = filterNames(['Максим', 'Маша', 'Юля', 'Катя'], 'я');

    expect(result).toEqual(['Катя', 'Юля']);
});