const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr, delta)) {
        return null;
    }
    return arr.map(el => el + delta);
}