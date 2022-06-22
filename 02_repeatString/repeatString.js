const repeatString = function(string, num) {
    let tempString = '';
    if (num < 0) {
        return "ERROR";
    } else {
        for (i = 0; i < num; i++) {
            tempString += `${string}`;    
    }
    }
    return tempString;
};

// Do not edit below this line
module.exports = repeatString;
