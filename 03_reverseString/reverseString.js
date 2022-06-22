const reverseString = function(string) {
    let temp = string.split("");
    let reverseHolder = [];

    // for (let i = string.length-1; i >= 0; i--) {
    //     reverseHolder.push(temp.pop());
    // }

    let tempLen = string.length;
    while (tempLen) {
        reverseHolder.push(temp.pop());
        tempLen--;
    }

    return reverseHolder.join('');
};

// Do not edit below this line
module.exports = reverseString;
