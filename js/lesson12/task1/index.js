const calc = num => {
    const [a, b, c] = num.split(' ');
    let result;

    switch (b) {
        case '+':
            result = +a + +c;
            break;
        case '-':
            result = +a - +c;
            break;
        case '*':
            result = +a * +c;
            break;
        case '/':
            result = +a / +c;
            break;
    }
    return `${num} = ${result}`;
};