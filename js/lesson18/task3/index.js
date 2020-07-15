export function sumOfSquares() {
    return [].reduce.apply(arguments, (acc, el) => {
        return acc + el;
    }, 0)
};