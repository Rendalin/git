const arrAverage = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.reduce((a, b) => (a + b)) / arr.length;
}