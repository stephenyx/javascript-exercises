const removeFromArray = function(arr, ...args) {
    // for (let arg of args) {
    //     let idx = arr.indexOf(arg);
    //     if (idx != -1) {
    //         arr.splice(idx,1);
    //     }
    // }
    // return arr;

    return arr.filter(val =>!args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
