const multiRound = (num, n) => [
    Math.floor(num * n) / n,
    Math.round(num * n) / n,
    Math.ceil(num * n) / n,
    Math.trunc(num * n) / n,
    Number(num.toFixed(n)),
];