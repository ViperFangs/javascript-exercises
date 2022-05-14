const removeFromArray = function(userArray, num) {
    let outputArray=[];
    for(const ch of userArray){
        if(ch === num){
            continue;
        }
        outputArray.push(ch);
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
