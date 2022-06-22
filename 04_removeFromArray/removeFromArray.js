const removeFromArray = function(arr, arg) {
    let idx = arr.indexOf(arg);
    arr.splice(idx,1);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
