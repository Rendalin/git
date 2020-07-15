const getTitleElement = () => {
    const titleElement = document.querySelector('.titel');
    console.dir(titleElement);
    return titleElement;
};

const getInputElement = () => {
    const inputElement = document.querySelector('input[type=text]');
    console.dir(inputElement);
    return inputElement;
};

export { getInputElement, getTitleElement }