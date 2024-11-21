import React from "react";

// Function to get a human-readable description of the weather
const getWeatherDescription = (code) => {
  // Switch case to match the weather code to a readable description
  switch (code) {
    case 0:
      return "Clear sky"; // Code 0 represents clear sky
    case 1:
    case 2:
    case 3:
      return "Partly cloudy"; // Codes 1, 2, 3 represent partly cloudy weather
    case 4:
    case 5:
      return "Cloudy"; // Codes 4, 5 represent cloudy weather
    case 6:
    case 7:
      return "Rain"; // Codes 6, 7 represent rainy weather
    case 8:
    case 9:
      return "Thunderstorms"; // Codes 8, 9 represent thunderstorms
    default:
      return "Unknown weather"; // Default case if the code is not recognized
  }
};

const WeatherDisplay = ({ weather, city }) => {
  // Check if the weather data is available. If not, display an error message.
  if (!weather || !weather.temperature) {
    return <p>Weather data is unavailable</p>; // Display an error message if data is missing
  }

  // If weather data is available, render the weather information
  return (
    <div className="weather-display">
      <h2 className="weather-city">{city}</h2> {/* Display the name of the city */}
      <div className="weather-info">
        {/* Display the temperature in Celsius */}
        <p>Temperature: {weather.temperature}°C</p>
        
        {/* Display the weather description based on the weather code */}
        <p>Weather: {getWeatherDescription(weather.weathercode)}</p>
        
        {/* Display the wind speed in kilometers per hour */}
        <p>Wind Speed: {weather.windspeed} km/h</p>
      </div>
    </div>
  );
};

// Export the component to be used in other parts of the app
export default WeatherDisplay;
