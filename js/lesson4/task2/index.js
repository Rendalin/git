const m = 1;
const n = 10;
let result = 1;
let i = m;

while (i <= n) {
    if (i % 2 === 1) {
        result *= i;
    }
    i++;
}
console.log('Result: ', result);