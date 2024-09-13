const removeFromArray = function(array, ...values) {
    let result = [];
    for(let arrayElement of array) {
        if(!values.includes(arrayElement)) {
            result.push(arrayElement);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
