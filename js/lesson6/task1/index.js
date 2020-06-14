function ggetArrayBounds(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return [arr.lendth, arr[0], arr.lendth - 1];
}