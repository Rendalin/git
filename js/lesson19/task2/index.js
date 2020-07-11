export const getOwnProps = (obj) => {
    const arr = [];
    for (const a in obj) {
        if (obj.hasOwnProperty(a)) {
            arr.push(a);
        }
    }
    return arr;
}