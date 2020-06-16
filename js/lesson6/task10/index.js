function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let arrReverse = [];
    for (let i = 0; i < arr.length; i++) {
        arrReverse.unshift(arr[i]);
    }
    return arrReverse;
}