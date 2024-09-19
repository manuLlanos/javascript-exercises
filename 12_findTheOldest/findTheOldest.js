const getAge = function (person) {
    const currentYear = (new Date()).getFullYear();
    
    if (!person.yearOfDeath) {
        return currentYear - person.yearOfBirth;
    }
    else return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function (people) {
    return people.reduce(
        (oldest, person) => {
            return getAge(person) > getAge(oldest) ? person : oldest;
        }, people[0]
    );
};

// Do not edit below this line
module.exports = findTheOldest;
