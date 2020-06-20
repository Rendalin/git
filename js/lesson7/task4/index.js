const getMessagesForBestStudents = (bestStudents, ofStudents) => bestStudents
    .filter(name => !ofStudents.includes(name))
    .map(name => 'Good job, ' + name);