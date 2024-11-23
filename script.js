// Set the current year and last modified date
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Calculate wind chill
function calculateWindChill(temp, windSpeed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(1); // Metric formula (°C)
}

const temperature = 30; // Static temperature
const windSpeed = 5; // Static wind speed

// Only calculate wind chill if conditions are met
if (temperature <= 10 && windSpeed > 4.8) {
  document.getElementById("wind-chill").textContent = calculateWindChill(
    temperature,
    windSpeed
  ) + "°C";
} else {
  document.getElementById("wind-chill").textContent = "N/A";
}
