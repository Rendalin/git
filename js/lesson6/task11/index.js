function cloneArr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    if (Array.isArray(arr)) {
        let newarr = [];
        for (let i = 0; i <= arr.length - 1; i++) {
            newarr.push(arr[i]);

        }
        return newarr;
    }
}