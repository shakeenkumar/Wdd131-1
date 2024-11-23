// Wind Chill Calculation Function
function calculateWindChill(temperature, windSpeed) {
  if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
      return (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
  } else {
      return "N/A";
  }
}

// Static Weather Values (For Rajahmundry)
const temperature = 28; // in Celsius
const windSpeed = 15; // in km/h

// Display the calculated Wind Chill
document.getElementById('windchill').textContent = calculateWindChill(temperature, windSpeed);

// Footer Dynamic Content
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
