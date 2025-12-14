const palindromes = function (string) {
    const cleanedString = string.split("").filter(char => {
            return /[a-zA-Z0-9]/.test(char)
        }).join("").toLowerCase();

    const reversedString = cleanedString.split("").reverse().join("");

    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
