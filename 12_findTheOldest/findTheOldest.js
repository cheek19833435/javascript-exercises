const findTheOldest = function(arr) {
    // create age key/value pair buy mapping to a new array
    let amendArr = arr.map(item=>({
        name: item.name,
        // logic within map
        //  if year of death is not truthy then apply 0 (if it returns nan)
        // get age and apply absolute value (turn negative to a positive)
        // age: Math.abs((item.yearOfDeath ? item.yearOfDeath:0) - item.yearOfBirth)
        // if year of death is truthy (not nan;false) then proceed with year of death
        // if not get the current date (2024 and get the full year)
        age: (item.yearOfDeath ? item.yearOfDeath:new Date().getFullYear()) - item.yearOfBirth
        // age: item.yearOfDeath- item.yearOfBirth
    }))
    console.log(amendArr)
    // filter out any NANS in age
    // let noNans = amendArr.filter(item=>item.age)
    // console.log(noNans)
    let maxAge = amendArr.reduce(
         (prev,current)=>{
            // compare prev age and current age and then returns prev object if true (?)
            // or current object if false (:)
            return prev.age > current.age ? prev : current
        })
    // returns object as test is looking for object
    return maxAge
};

// Do not edit below this line
module.exports = findTheOldest;
