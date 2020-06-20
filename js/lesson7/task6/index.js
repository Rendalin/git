const reverseArray = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    arr.slice().reverse();
}