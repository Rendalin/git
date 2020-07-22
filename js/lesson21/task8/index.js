export const createButton = buttonText => {
    const buttonElement = document.createElement('button').textContent = buttonText;
    return document.querySelector('body').append(buttonElement);
}