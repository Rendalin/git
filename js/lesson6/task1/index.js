function ggetArrayBounds(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return getArrayBounds[arr.lendth, arr[0], arr.lendth - 1];
}