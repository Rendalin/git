const m = 1;
const n = 25;
let result = 0;

for (let i = m; i <= n; i++) {
    if ((i % 2 === 0) && (i % 4 !== 0)) {
        if (i % 5 === 0) {
            console.log(i);
        } else {
            result += i;
        }
    } else if (i % 3 === 0) {
        if (i % 5 == 0) {
            console.log(i)
        } else {
            result -= i;
        }
    } else if (i % 4 === 0) {
        if (i % 5 === 0) {
            console.log(i);
        } else {
            result *= i;
        }
    } else if (i % 5 === 0) {
        console.log(i);
    }
    console;
}