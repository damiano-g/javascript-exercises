const reverseString = function(string) {
    let revString;
    let lastInd = String(string).length-1;

    for(let i=0; i <= lastInd; i++){
        String(revString) += String(string).charAt(lstInd-i);
    }

    return revString;
};

// Do not edit below this line
module.exports = reverseString;
