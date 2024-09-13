const sumAll = function(start, end) {
    for(let arg of arguments) {
        if(arg < 0 || !Number.isInteger(arg)) {
            return "ERROR";
        }
    }

    if(start === end) {
        return start;
    }

    if(end < start) {
        let tmp = start;
        start = end;
        end = tmp;
    }

    if(start === 1) {
        return gausSummation(end);
    }
    else {
        return gausSummation(end) - gausSummation(start-1);
    }
};

// 1 + 2 + 3 + ... + N = N*(N+1)/2
function gausSummation(n) {
    return n * (n+1) / 2;
}

// Do not edit below this line
module.exports = sumAll;
