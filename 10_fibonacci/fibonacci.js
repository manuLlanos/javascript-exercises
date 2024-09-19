const fibonacci = function (index) {
    index = parseInt(index);
    if (index < 0) return "OOPS";
    if (index == 0) return 0;
    if (index < 3) return 1;

    let prev = 1;
    let curr = 2;
    for (let i = 3; i < index; i++) {
        let tmp = curr;
        curr = curr + prev;
        prev = tmp;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
