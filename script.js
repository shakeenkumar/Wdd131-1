// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Calculate wind chill function
function calculateWindChill(temperature, windSpeed) {
    // Check if the conditions for wind chill calculation are met
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        // Wind Chill formula for Fahrenheit
        let windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2); // Return calculated wind chill
    } else {
        return "N/A"; // If conditions aren't met, return N/A
    }
}

// Static temperature and wind speed values
let temperature = 28; // Example temperature in °C
let windSpeed = 15; // Example wind speed in km/h

// Calculate wind chill and display it
document.getElementById("windchill").textContent = calculateWindChill(temperature, windSpeed);
