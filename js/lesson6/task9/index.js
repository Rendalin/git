function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let newArr = [];
    for (let i of arr) {
        if (i % 2 === 0)
            newArr.push(i += delta);
        else
            newArr.push(i);

    }
    return newArr;
}

console.log(increaseEvenEl([3, 4, 7, 8], 10));