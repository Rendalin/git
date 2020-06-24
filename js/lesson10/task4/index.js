const getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr) || arr == 0) {
        return null;
    }
    const newArr = arr
        .map(num => Math.abs(num));
    return Math.max(...newArr);
}