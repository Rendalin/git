const countOccurrences = (strink, n) => {
    if (n === '') {
        return null;
    }
    return strink.split(n).length - 1;
}