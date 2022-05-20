const palindromes = function (a) {
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    aLower = a.toLowerCase();
    const result = aLower.replace(regex, '');
    const output = result.split(" ").join("")
    return output == output.split("").reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
