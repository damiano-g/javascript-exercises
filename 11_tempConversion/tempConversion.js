const convertToCelsius = function(temp) {
  return Number(temp.toFixed(1)) - 32;
};

const convertToFahrenheit = function(temp) {
  return Number(temp.toFixed(1)) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
