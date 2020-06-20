const cloneArr = arr => {
    if (!Array.isArray) {
        return null;
    }
    return arr.slice();
}