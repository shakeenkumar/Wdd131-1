// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Set the last modified date in the footer
document.getElementById("last-modified").textContent = document.lastModified;

// Wind chill calculation function
function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 50 && windSpeed > 3) {
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return Math.round(windChill);
  }
  return null;
}
