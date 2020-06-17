function uniqueCount(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    const arrDuplicates = [];
    for (let i = 0; i < array.length; i += 1) {
        arrDuplicates.push(array[i]);
        for (let j = i + 1; j < array.length; j += 1) {
            if (array[j] === array[i]) {
                arrDuplicates.pop(array[j]);
            }
        }
    }
    return arrDuplicates.length;
}