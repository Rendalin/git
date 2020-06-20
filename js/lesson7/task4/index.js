const getMessagesForBestStudents = (bestStudents, ofStudents) => bestStudents
    .indexOf(name => !ofStudents.includes(name))
    .map(name => 'Good job, ' + name);