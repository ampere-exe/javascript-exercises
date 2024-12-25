const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0 || Number.isInteger(num1) == false || Number.isInteger(num2) == false) {
        return "ERROR"
    } else {
        sum = 0;
        if (num1 < num2) {
            for (i = num1; i <= num2; i++) {
                sum += i;
            }
            return sum;
        } else {
            for (i = num2; i <= num1; i++) {
                sum += i;
            }
            return sum;
        }
    }
};

//console.log(sumAll("Helo", 1));
// Do not edit below this line
module.exports = sumAll;
