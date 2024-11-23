// Function to calculate windchill
function calculateWindChill(temp, windSpeed) {
    // Only calculate if conditions are met
    if ((temp <= 10 && windSpeed > 4.8) || (temp <= 50 && windSpeed > 3)) {
        return Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16));
    } else {
        return 'N/A';
    }
}

// Display the windchill factor when the page loads
window.onload = function () {
    var temperature = 28; // Example static temperature in °C
    var windSpeed = 15; // Example static wind speed in km/h
    var windchill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windchill").textContent = windchill + '°C';
};
