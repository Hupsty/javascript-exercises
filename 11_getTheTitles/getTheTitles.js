const getTheTitles = function(books) {
    let x = [];
    for (let i = 0; i < books.length; i++) {
        x[i] = books[i].title;
    }
    return x;
};

// Do not edit below this line
module.exports = getTheTitles;
