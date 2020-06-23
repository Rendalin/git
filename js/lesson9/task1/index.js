const getAdults = (obj) => Object.entries(obj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);