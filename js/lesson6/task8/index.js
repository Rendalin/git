function checkSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sum = 0;
    for (let i of arr) { /// for(let i = 0; i<=arr.length; i++)
        sum += i;
    }
    return sum > 100 ? true : false;

}
console.log(checkSum([5, 10, 20]));