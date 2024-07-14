const leapYears = function(yr) {
    // if no left over when divided by 4 (modulo operator %) returns 0 - leap year
    if (yr%4==0 && yr%100 ==0 && yr%400==0){
        return true
    } else if (yr%100==0) {
        return false
    } else if (yr%4!=0){
        return false
    } else if (yr%4==0 && yr%100 !=0 && yr%400!=0){
        return true
    } else {
        return false
    }
}
//   if (yr % 4 ==0 && yr % 400 !=0 && yr % 100 ==0){
//         return true
//     } else if (yr % 100 == 0 && yr % 400 == 0){
//         return true
//     } else {
//         return false
//     }
// };

// Do not edit below this line
module.exports = leapYears;
