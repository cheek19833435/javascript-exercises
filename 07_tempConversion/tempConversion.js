const convertToCelsius = function(ft) {
  let temp = (ft-32) * (5/9)
  // converts to number - toFixed reduces to 1 decimal places - but as a string
  temp = Number(temp).toFixed(1)
  // parseFloat converts string to decimal
  return parseFloat(temp)
};

const convertToFahrenheit = function(cel) {
  let temp = (cel * (9/5)+32)
  // converts to number - toFixed reduces to 1 decimal places - but as a string
  temp = Number(temp).toFixed(1)
  // parseFloat converts string to decimal
  return parseFloat(temp)
  return temp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
