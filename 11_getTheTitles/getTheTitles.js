const getTheTitles = function(books) {
    let arr = []
    books.map((item) => {
        arr.push(item.title)
    } )
    return arr
};

// Do not edit below this line
module.exports = getTheTitles;
