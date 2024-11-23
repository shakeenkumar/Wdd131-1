// Footer: Add current year and last modified date
const footerContent = document.getElementById("footerContent");
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
footerContent.innerHTML = `&copy; ${currentYear} | Rajahmundry | Last Modified: ${lastModified}`;

// Weather: Calculate Wind Chill
const temperature = 30; // Celsius
const windSpeed = 5; // km/h

function calculateWindChill(temp, wind) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

const windChillElement = document.getElementById("windChill");
if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = calculateWindChill(temperature, windSpeed) + "°C";
} else {
  windChillElement.textContent = "N/A";
}
