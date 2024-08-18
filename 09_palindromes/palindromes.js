const palindromes = function (str) {
    // splits and converts to array    
    let arr = str.split('')
    let reverseArr = arr.slice()
    reverseArr.reverse()
    // item =>item.match(/[a-zA-Z0-9]/) returns only a-zA-Z0-9 chars
    // filters both arrays and converts to strings for comparison
    let rev2 = reverseArr.filter(item => item.match(/[a-zA-Z0-9]/))
    console.table('reverse ' + rev2)
    arr = arr.filter(item =>item.match(/[a-zA-Z0-9]/))
    console.table('arr ' + arr)
    // converts to string
    let reversedStr = rev2.toString().toLowerCase()
    let arrStr = arr.toString().toLowerCase()
    // console.log(reversedStr)
    // console.log(arrStr)
    
    
    // // removes comma from string
    // for (let x=0;x<reversedStr.length;x++){
    //     if(reversedStr[x] != ','){
    //         amendStr+=reversedStr[x]
    //     }
    // }
    if (arrStr == reversedStr){
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
