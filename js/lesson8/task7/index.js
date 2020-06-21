const addPropertyV1 = (obj, key, value) => obj[key] = value;
const addPropertyV2 = (obj, key, value) => Object.assign(obj, {
    [key]: value
});
const addPropertyV3 = (obj, key, value) => {
    const copy = Object.assign({}, obj, {
        [key]: value
    })
};
const addPropertyV4 = (obj, key, value) => { copyObj = {...obj, [key]: value } };