const palindromes = function (phrase) {
    let normalized = phrase
        .toLowerCase()
        .split("").filter(char => /[a-z0-9]/.test(char))
        .join("");

    let reversed = normalized.split("").reverse().join("");

    return(normalized === reversed);
};

// Do not edit below this line
module.exports = palindromes;