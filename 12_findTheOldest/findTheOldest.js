const findTheOldest = function(people) {
    let oldestPerson;
    let oldestAge = 0;
    for (person of people) {
        if (!person.yearOfDeath) {
            const d = (new Date()).getFullYear();
            const age = d - person.yearOfBirth;
            if (age > oldestAge) {
                oldestAge = age;
                oldestPerson = person;
                continue;
            }
        }
        if (person.yearOfDeath - person.yearOfBirth > oldestAge) {
            oldestAge = person.yearOfDeath - person.yearOfBirth;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
