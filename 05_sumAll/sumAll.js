const sumAll = function(startValue, endValue) {

    if(startValue < 0 || endValue <0){
        return 'ERROR'
    }

    if(startValue > endValue){
        let temp = 0;
        temp = startValue;
        startValue = endValue;
        endValue = temp;
    }

    let output = 0;

    for(i=startValue; i<=endValue; i++) output += i;
    
    return output;
};

// Do not edit below this line
module.exports = sumAll;
