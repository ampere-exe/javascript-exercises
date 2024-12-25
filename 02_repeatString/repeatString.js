const repeatString = function(string, num) {
    fullString = "";

    if (num >= 0) {
        for (let i = 0; i < num; i++) {
        fullString += string; 
    }
    return fullString;
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
