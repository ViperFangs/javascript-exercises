const findTheOldest = function(arrayOfPeople) {
/*---------------
    Pseudo Code:
Function takes an array,.
Take the array.yearOfDeath and subtract with the array.yearOfBirth.
However, if there is no yearOfDeath then set the date as the current time 
Use ((new Date).getFullYear());
---------------*/ 

if(!arrayOfPeople.yearOfDeath){
    arrayOfPeople.yearOfDeath = ((new Date).getFullYear());
}

const oldest = arrayOfPeople.sort((previousPerson, nextPerson) =>{
    let previousPersonDOB = previousPerson.yearOfDeath - previousPerson.yearOfBirth;
    let nextPersonDOB = nextPerson.yearOfDeath - nextPerson.yearOfBirth;

    if(previousPersonDOB > nextPersonDOB) return -1
    return 1;
})

};

// Do not edit below this line
module.exports = findTheOldest;
