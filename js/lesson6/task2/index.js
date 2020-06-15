function getSum(arr) {
    sumNambers = 0;
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        sumNambers += arr[i];
    }

    return sumNambers;
}