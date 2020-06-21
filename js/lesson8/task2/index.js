const concatProps = obj => {
    const arr = [];
    obj.forEach(el => [arr[el] = el]);
    return arr;
}