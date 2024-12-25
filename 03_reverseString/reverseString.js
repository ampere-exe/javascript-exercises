const reverseString = function(string) {
    const stringPosition = string.length - 1;
    let reversedString = "";
    for (let i = stringPosition; i >= 0; i --) {
        reversedString += string.charAt(i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
