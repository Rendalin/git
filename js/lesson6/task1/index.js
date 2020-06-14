function getArrayBounds(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return [arr.lendth, arr[0], arr.lendth - 1];
}

const getArrayBounds = [4, 6, 8, 11, 14];