const convertToCelsius = function(temp) {
  return parseFloat(temp.toFixed(1)) - 32.0;
};

const convertToFahrenheit = function(temp) {
  return parseFloat(temp.toFixed(1)) + 32.0;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
