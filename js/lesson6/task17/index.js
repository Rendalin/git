function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return null;
    }
    let arrDuplicates = [];
    for (let i = 0; i < array.length; i++) {
        arrDuplicates.push(array[i]);
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] === array[i]) {
                arrDuplicates.pop(array[j]);
            }
        }
    }
    return arrDuplicates;
}