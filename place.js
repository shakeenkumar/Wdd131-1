// Dynamically update footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Calculate wind chill
function calculateWindChill(temp, windSpeed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(2);
}

const temp = 30; // Current temperature
const windSpeed = 12; // Current wind speed

let windChill = "N/A";
if (temp <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temp, windSpeed) + "°C";
}

document.getElementById('wind-chill').textContent = windChill;
