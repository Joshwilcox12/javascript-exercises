const convertToCelsius = function(Celsius) {
  fahrenheit = ((Celsius - 32) * (5 / 9))
    function round(value, precision){
      let multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier)/ multiplier;

    }
    return round(fahrenheit,1)

};

const convertToFahrenheit = function(fahrenheit) {
  celsius = ((fahrenheit *(9 / 5) + 32))
    function round(value, precision){
      let multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier)/ multiplier;

    }
    return round(celsius,1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
