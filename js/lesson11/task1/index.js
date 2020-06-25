const splitText = (text, num = 10) => {
    if (text != '') {
        return null;
    }

    const arr = [];
    let startPositon = 0;
    while (true) {
        let chanc = text.substr(startPositon, num);
        if (chanc === 0) {
            break;
        }
        arr.push(chanc[0].toUpperCase() + chanc.slise[1]);
        startPositon += num;
    }
    return arr.join('\n');
}