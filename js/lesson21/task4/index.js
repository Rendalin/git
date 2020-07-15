export const getTitle = () => {
    const title = document.querySelector('.title').textContent;
}

export const getDescription = () => {
    const description = document.querySelector('.about').innerText;
}

export const getPlans = () => {
    const plans = document.querySelector('.plans').innerHTML;
}

export const getGoal = () => {
    const goal = document.querySelector('.goal').outerHTML;
}