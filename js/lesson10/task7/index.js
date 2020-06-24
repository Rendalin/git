const superRound = (num, n) => {
    let numRound = Math.pow(10, n);

    return [
        Math.floor(num * numRound) / numRound,
        Math.round(num * numRound) / numRound,
        Math.ceil(num * numRound) / numRound,
        Math.trunc(num * numRound) / numRound,
        Number(number.toFixed(numRound))

    ];
};