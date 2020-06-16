function checker(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    if (Array.isArray(arr)) {
        let min = [0];
        for (let i = 0; i <= arr.length; i++) {
            if (min > arr[i]) {
                min = (arr[i]);
            }
        }
        let max = [0];
        for (let i = 0; i < arr.length; i++) {
            if (max < arr[i]) {
                max = (arr[i]);
            }
        }
        return (min + max) > 1000 ? true : false;
    }
}