const sumAll = function(numA, numB) {

    if(
        typeof numA != "number" ||
        typeof numB != "number" ||
        !Number.isInteger(numA) ||
        !Number.isInteger(numB)
    ) return "ERROR";

    let minNum = Math.min(numA, numB);
    let maxNum = Math.max(numA, numB);
    let sum = minNum

    while(minNum <= maxNum){
        sum += ++minNum
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
