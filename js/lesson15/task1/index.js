export function makeCounter() {
    let result = 0;

    return function() {
        return result++;
    }
}