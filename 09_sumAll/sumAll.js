const sumAll = function(numA, numB) {

    if(
        typeof numA != "number" ||
        typeof numB != "number" ||
        !Number.isInteger(numA) ||
        !Number.isInteger(numB) ||
        numA < 0 ||
        numB < 0
    ) return "ERROR";

    let minNum = Math.min(numA, numB);
    let maxNum = Math.max(numA, numB);
    let sum = 0

    while(minNum <= maxNum){
        sum += minNum;
        minNum++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
