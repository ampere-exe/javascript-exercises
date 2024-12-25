const removeFromArray = function() {
    // initialize the first argument as the array being manipulated
    let array = arguments[0];

    // Cycle through all the arguments after the first one
    for(let x = 0; x < array.length; x++) {
        for (let i = 1; i < arguments.length; i++) {
            if (array[x] == arguments[i] && typeof(array[x]) == typeof (arguments[i])) {
                array = array.toSpliced(x, 1);
                x -= 1;
            }
        }
    }
    return array;
};

//console.log(removeFromArray(["money", 2, 2, 3, 3, 4, "swamp!"], 2, 3, "money"));
// Do not edit below this line
module.exports = removeFromArray;
