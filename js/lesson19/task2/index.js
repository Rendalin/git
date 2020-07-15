export const getOwnProps = (obj) => {
    const arr = [];
    for (const a in obj) {
        if (obj.hasOwnProperty(a) && typeof obj[a] !== 'function') {
            arr.push(a);
        }
    }
    return arr;
}