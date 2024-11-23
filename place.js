// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3) { // Conditions for wind chill calculation
      // Wind chill formula for Fahrenheit
      return (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    }
    return "N/A";
  }
  
  // Display current year and last modified date in the footer
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
  
  // Static temperature and wind speed for now
  const temp = 50; // in °F
  const windSpeed = 10; // in mph
  
  // Calculate and display wind chill
  const windChill = calculateWindChill(temp, windSpeed);
  document.getElementById("windChill").textContent = `${windChill}°F`;
  