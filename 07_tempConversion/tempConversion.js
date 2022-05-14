const ftoc = function(tempF) {
let tempC = (5/9)*(tempF-32);

return Math.round(tempC * 10) / 10;
};

const ctof = function(tempC) {
let tempF = ((9/5)*tempC)+32;

return Math.round(tempF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
