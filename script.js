// Units for various categories
const units = {
    length: { meters: 1, kilometers: 0.001, miles: 0.000621371, feet: 3.28084, inches: 39.3701 },
    weight: { grams: 1, kilograms: 0.001, pounds: 0.00220462, ounces: 0.035274 },
    temperature: { celsius: 1, fahrenheit: 33.8, kelvin: 274.15 },
    area: { squareMeters: 1, acres: 0.000247105, squareMiles: 3.861e-7, hectares: 0.0001 },
    volume: { liters: 1, gallons: 0.264172, cups: 4.22675, milliliters: 1000 },
    speed: { 'm/s': 1, 'km/h': 3.6, 'mph': 2.23694, 'ft/s': 3.28084 },
    time: { seconds: 1, minutes: 1 / 60, hours: 1 / 3600, days: 1 / 86400 },
    digital: { bytes: 1, kilobytes: 0.001, megabytes: 1e-6, gigabytes: 1e-9 }
  };
  
  // Populate the unit dropdowns based on selected category
  function populateUnits() {
    const category = document.getElementById('category').value;
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
  
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';
  
    Object.keys(units[category]).forEach(unit => {
      const option1 = new Option(unit, unit);
      const option2 = new Option(unit, unit);
      fromUnit.add(option1);
      toUnit.add(option2);
    });
  }
  
  // Conversion logic
  function convert() {
    const category = document.getElementById('category').value;
    const value = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultElement = document.getElementById('result');
  
    if (isNaN(value)) {
      resultElement.textContent = 'Please enter a valid number.';
      return;
    }
  
    let result;
    if (category === 'temperature') {
      if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (value * 9) / 5 + 32;
      } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = ((value - 32) * 5) / 9;
      } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        result = value + 273.15;
      } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        result = value - 273.15;
      } else {
        result = value;
      }
    } else {
      result = (value / units[category][fromUnit]) * units[category][toUnit];
    }
  
    resultElement.textContent = `${value} ${fromUnit} = ${result.toFixed(4)} ${toUnit}`;
  }
  
  // Initialize the converter with default values
  window.onload = () => {
    populateUnits();
  };
  