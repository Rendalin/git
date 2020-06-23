const getPeople = obj => Object.values(obj)
    .flat()
    .map(obj => Object.values(obj))
    .flat();