const sumAll = function(a,b) {
    let totals = 0
    // if a is larger then b
    if (a>b){
        // temp vars before reassignment! 
        let temp_a = a
        let temp_b = b
        // make b the larger
        b=temp_a
        // make a the smaller
        a=temp_b
    }
    if (a<0 || b<0){
        return "ERROR"
    } else if(typeof a !="number" || typeof b !="number"){
        return "ERROR"
    } else {
        for (let i=a;i<b+1;i++){
        totals+=i
        // console.log(totals)
    }
    return totals
}
    
    
};

// Do not edit below this line
module.exports = sumAll;
