export default arr => {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    const newArr = arr.map(num => Math.abs(num));

    return Math.min(...newArr) ** 2;

}