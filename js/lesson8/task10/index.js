function buildObject(keyList, valueList) {
    return keyList.reduce((acc, key, value) => ({...acc, [key]: valueList[value] }), {});
}