const convertToCelsius = function(temperature) {
  const newTemp = (temperature - 32) * (5/9);
  return Math.round(newTemp * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  const newTemp = temperature * (9/5) + 32;
  return Math.round(newTemp * 10) / 10;
};

console.log(convertToCelsius(32));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
