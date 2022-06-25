const findTheOldest = function(people) {
    return people.reduce(function (oldest, current) {
        const oldestAge = theirAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = theirAge(current.yearOfBirth, current.yearOfDeath);
        return currentAge > oldestAge ? current : oldest;
    })
};
const theirAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
