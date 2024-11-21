import React, { useState } from "react"; // Importing React and useState hook to manage state in the component
import WeatherDisplay from "./src/WeatherDisplay"; // Importing the WeatherDisplay component to show the weather data
import "./src/App.css"; // Importing the CSS file for styling

const App = () => {
  // Defining state variables using React's useState hook
  const [city, setCity] = useState(""); // State to hold the city input from the user
  const [weather, setWeather] = useState(null); // State to store weather data retrieved from the API
  const [status, setStatus] = useState("idle"); // State to track the status: idle, loading, error, or success

  // Predefined list of cities with their respective latitude and longitude for the API query
  const cityCoords = {
    "New York": { lat: 40.7128, lon: -74.006 },
    London: { lat: 51.5074, lon: -0.1278 },
    Tokyo: { lat: 35.6762, lon: 139.6503 },
    Paris: { lat: 48.8566, lon: 2.3522 },
    Berlin: { lat: 52.52, lon: 13.405 },
    Mumbai: { lat: 19.076, lon: 72.8777 },
    Delhi: { lat: 28.6139, lon: 77.209 },
    Bangalore: { lat: 12.9716, lon: 77.5946 },
    Kolkata: { lat: 22.5726, lon: 88.3639 },
    Chennai: { lat: 13.0827, lon: 80.2707 },
    Hyderabad: { lat: 17.385, lon: 78.4867 },
    Ahmedabad: { lat: 23.0225, lon: 72.5714 },
    Pune: { lat: 18.5204, lon: 73.8567 },
    Jaipur: { lat: 26.9124, lon: 75.7873 },
    Surat: { lat: 21.1702, lon: 72.8311 },
    Lucknow: { lat: 26.8467, lon: 80.9462 },
    Kanpur: { lat: 26.4499, lon: 80.3319 },
    Nagpur: { lat: 21.1458, lon: 79.0882 },
    Indore: { lat: 22.7196, lon: 75.8577 },
    Patna: { lat: 25.5941, lon: 85.1376 },
    Vadodara: { lat: 22.3075, lon: 73.1812 },
    Coimbatore: { lat: 11.0168, lon: 76.9558 },
    Bhopal: { lat: 23.2599, lon: 77.4126 },
    Visakhapatnam: { lat: 17.6869, lon: 83.2185 },
    Meerut: { lat: 28.9845, lon: 77.7048 },
    Agra: { lat: 27.1767, lon: 78.0081 },
    Nashik: { lat: 19.9975, lon: 73.7903 },
    Trivandrum: { lat: 8.5241, lon: 76.9366 },
    Mysore: { lat: 12.2958, lon: 76.6394 },
    Jammu: { lat: 32.7266, lon: 74.857 },
    Ranchi: { lat: 23.3441, lon: 85.3096 },
    Jodhpur: { lat: 26.2389, lon: 73.0248 },
    Guwahati: { lat: 26.1445, lon: 91.7362 },
    Varanasi: { lat: 25.3176, lon: 82.9739 },
    Noida: { lat: 28.5355, lon: 77.391 },
  };

  // Function to fetch weather data using Open-Meteo API based on provided coordinates (latitude and longitude)
  const getWeatherData = async (lat, lon) => {
    try {
      // Making an API request to Open-Meteo with the latitude and longitude
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      const data = await response.json(); // Parsing the response as JSON

      if (data.current_weather) {
        return data.current_weather; // Return the current weather data if available
      } else {
        throw new Error("Weather data not available"); // If no weather data is found, throw an error
      }
    } catch (err) {
      // Catch any errors and throw a new error message
      throw new Error("Failed to fetch weather data. Please try again.");
    }
  };

  // Handle the search form submission
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    setStatus("loading"); // Set status to "loading" while fetching the data
    setWeather(null); // Reset weather data before fetching new data

    try {
      // Perform a case-insensitive search to find the matching city
      const matchingCity = Object.keys(cityCoords).find(
        (cityName) => cityName.toLowerCase() === city.toLowerCase()
      );

      if (!matchingCity) {
        throw new Error("City not found"); // If no matching city is found, throw an error
      }

      // Get the coordinates (latitude and longitude) of the matching city
      const { lat, lon } = cityCoords[matchingCity];

      // Fetch weather data based on the city's coordinates
      const weatherData = await getWeatherData(lat, lon);

      // Update state with the fetched weather data
      setWeather(weatherData);
      setStatus("success"); // Set status to "success" when the data is successfully fetched
    } catch (err) {
      setStatus("error"); // If an error occurs, set the status to "error"
    }
  };

  // Handle changes in the city input field
  const handleInputChange = (e) => {
    setCity(e.target.value); // Update the city state with the current input value
  };

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1 className="title">Weather Now</h1> {/* Title of the app */}
        {/* Form for city input and search */}
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text" // Input field for the user to enter a city name
            value={city} // Bind the input field value to the city state
            onChange={handleInputChange} // Call handleInputChange when the input value changes
            placeholder="Enter city name" // Placeholder text in the input field
            className="search-input" // Class for styling
          />
          <button type="submit" className="search-button">
            Check Weather {/* Button to submit the form and fetch weather */}
          </button>
        </form>
      </header>

      {/* Display loading text when the status is "loading" */}
      {status === "loading" && <p className="loading">Loading...</p>}

      {/* Display error message when the status is "error" */}
      {status === "error" && (
        <p className="error">Error fetching weather data. Please try again.</p>
      )}

      {/* Display the weather information when the status is "success" and weather data is available */}
      {status === "success" && weather && (
        <WeatherDisplay weather={weather} city={city} />
      )}
    </div>
  );
};

export default App;
