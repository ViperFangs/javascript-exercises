const removeFromArray = function(userArray, ...num) {
    let outputArray=[];
    for(let i=0; i<userArray.length; i++)
        for(let j=0; j<num.length; j++){
            if(userArray[i] === num[j]) break;
            else if(j == num.length-1) outputArray.push(userArray[i]);
        }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
