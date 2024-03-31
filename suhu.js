function calculateTemperature(unit) {
  var temperatureInput = parseFloat(document.getElementById('temperature_input').value);

  var celciusValue, farenheitValue, reamurValue, kelvinValue;

  switch (unit) {
    case 'celcius_value':
      celciusValue = temperatureInput;
      farenheitValue = temperatureInput * (9 / 5) + 32;
      reamurValue = temperatureInput * (4 / 5);
      kelvinValue = temperatureInput + 273.15;
      break;
    case 'farenheit_value':
      farenheitValue = temperatureInput;
      celciusValue = (temperatureInput - 32) * (5 / 9);
      reamurValue = (temperatureInput - 32) * (4 / 9);
      kelvinValue = (temperatureInput - 32) * (5 / 9) + 273.15;
      break;
    case 'reamur_value':
      reamurValue = temperatureInput;
      celciusValue = temperatureInput * (5 / 4);
      farenheitValue = temperatureInput * (9 / 4) + 32;
      kelvinValue = temperatureInput * (5 / 4) + 273.15;
      break;
    case 'kelvin_value':
      kelvinValue = temperatureInput;
      celciusValue = temperatureInput - 273.15;
      farenheitValue = (temperatureInput - 273.15) * (9 / 5) + 32;
      reamurValue = (temperatureInput - 273.15) * (4 / 5);
      break;
  }

  document.getElementById('celcius_value').value = celciusValue.toFixed(2);
  document.getElementById('farenheit_value').value = farenheitValue.toFixed(2);
  document.getElementById('reamur_value').value = reamurValue.toFixed(2);
  document.getElementById('kelvin_value').value = kelvinValue.toFixed(2);
}
