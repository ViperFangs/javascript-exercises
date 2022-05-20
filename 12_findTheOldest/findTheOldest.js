const findTheOldest = function(arrayOfPeople) {
/*---------------
    Pseudo Code:
Function takes an array,.
Take the array.yearOfDeath and subtract with the array.yearOfBirth.
However, if there is no yearOfDeath then set the date as the current time 
Use ((new Date).getFullYear());
---------------*/ 
const oldest = arrayOfPeople.sort((previousPerson, nextPerson) =>{

    if(!previousPerson.yearOfDeath){
        previousPerson.yearOfDeath = ((new Date).getFullYear());
    }

    if(!nextPerson.yearOfDeath){
        nextPerson.yearOfDeath = ((new Date).getFullYear());
    }

    let previousPersonDOB = previousPerson.yearOfDeath - previousPerson.yearOfBirth;
    let nextPersonDOB = nextPerson.yearOfDeath - nextPerson.yearOfBirth;

    if(previousPersonDOB > nextPersonDOB) return -1
    return 1;
})

return oldest[0];

};

// Do not edit below this line
module.exports = findTheOldest;
