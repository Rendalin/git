const getAdults = obj => {
    let newObj = {};

    for (const i in obj) {
        if (obj[i] >= 18) {
            newObj[i] = obj[i];
        }
    }
    return newObj;
};