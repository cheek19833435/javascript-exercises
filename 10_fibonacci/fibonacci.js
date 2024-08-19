const fibonacci = function(num) {
    // convert string to number
    num = Number(num)
    let fib = [1, 1, 2, 3, 5, 8]
    let fib2 = fib.splice(fib.length-2)
    for (let x=0;x<30;x++){
        // get last and second last numbers
        let last = fib2[(fib2.length)-1]
        let beforelast = fib2[(fib2.length)-2]
        let nextNo = last + beforelast
        fib2.push(nextNo)
    }
    // if num =0 return 0 
    if (num==0){
        return 0
    // if number is negative
    } else if (num <0){
        return 'OOPS'
    }
    // merging fib2 with fib
    fib = fib.concat(fib2)
    // return num-1 as 0 based indexing
    return fib[num-1]
    
    // if (index){
    //     // console.log(index)
    
    //     console.log(fib[last],fib[beforelast])
    // }
    
};

// Do not edit below this line
module.exports = fibonacci;
