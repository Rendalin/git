const pickProps = (obj, array) => {
    const newObj = {};
    array.forEach(element => {
        newObj[element] = obj[element]
    });
    return newObj;
}