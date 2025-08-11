const palindromes = function (myString) {
    let aplhanum = "abcdefghijklmnopqrstuvwxyz0123456789";

    let cleanString = myString.toLowerCase().split("").filter((char)=>aplhanum.includes(char)).join("");
    let revString = cleanString.split("").reverse().join("");

    return cleanString === revString;
};

// Do not edit below this line
module.exports = palindromes;
