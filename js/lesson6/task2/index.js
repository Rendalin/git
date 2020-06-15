function getSum(arr) {
    sumNambers = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        sumNambers += arr[i];
        return sumNambers;
    }
    if (!Array.isArray(arr)) {
        return null;
    }

}