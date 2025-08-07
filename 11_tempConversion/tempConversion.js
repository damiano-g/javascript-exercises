const convertToCelsius = function(temp) {
  return (parseFloat(temp.toFixed(1)) - 32.0) * (5/9);
};

const convertToFahrenheit = function(temp) {
  return parseFloat(temp.toFixed(1)) * (9/5) + 32.0;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
