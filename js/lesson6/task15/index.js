function getSubArray(arr, n) {
    let newArr = []
    for (let i = 0; i < n; i++) {
        newArr[i] = arr[i];
    }
    return newArr;
}

console.log(getSubArray([2, 4, 6, 8, 9, 4, 5], 4));