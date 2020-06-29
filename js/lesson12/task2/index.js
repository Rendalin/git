const reverseString = strink => {
    if (typeof strink !== 'string')
        return null;

    return strink.split('').reverse().join('');
}




console.log(reverseString('jlkljkljkjkjkjkjkjkj2134124'));