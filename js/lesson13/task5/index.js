//lesson 7 hw7
export const filterNames = (arr, text) => arr.filter(name => name.length > 5 && name.includes(text));


//lesson 7 hw8

export const arrAverage = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.reduce((a, b) => (a + b)) / arr.length;
}

//lesson 8 hw1

export const transaction = {
    currency: 'USD',
    value: 170,
    operation: 'sale',
    agent: {
        country: 'Ukraine',
        company: 'NYSE'
    },
    'operation time': 1584029990001
};

//lesson 8 hw2//

export const user = {
    name: 'Tom',
    age: 17,
};

user.hobby = 'football';
const anotherKey = 'married';
user[anotherKey] = false;
user['favourite music'] = 'rock';
user['address'] = {};
user.address['country'] = 'Ukraine';
user.address['bulding'] = '17';
console.log(user);