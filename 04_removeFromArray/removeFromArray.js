const removeFromArray = function(arr, ...args) {
    // arrow function to iterate over each item in ...args (unlimited array)
    // filter out don't include (! args.includes) items that are in the args array
    arr = arr.filter((nu) => !args.includes(nu))
    return arr
    

    
};



// Do not edit below this line
module.exports = removeFromArray;
