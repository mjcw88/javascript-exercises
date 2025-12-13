const findTheOldest = function(people) {
    let ages = [];

    for (let p of people) {
        let deathYear = p.yearOfDeath || new Date().getFullYear();
        let birthYear = p.yearOfBirth;

        let person = {
            name: p.name,
            age: deathYear - birthYear,
        };

        ages.push(person);
    }

    return ages.reduce((oldest, current) => {
        return oldest.age > current.age ? oldest : current;
    });
    
};

// Do not edit below this line
module.exports = findTheOldest;
