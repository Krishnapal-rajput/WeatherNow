# WeatherNow

WeatherNow is a simple and efficient weather forecasting application built using React. It allows users to check the current weather conditions for various predefined cities. By entering a city name, users can view weather data such as temperature, wind speed, humidity, and more.

## Features

- **City Search**: Users can search for weather information by typing the name of a city.
- **Real-Time Data**: Fetches real-time weather data from the Open-Meteo API based on the city coordinates.
- **Predefined City List**: Supports multiple cities from around the world, including major cities in India and other countries.
- **Error Handling**: Displays meaningful error messages if the city is not found or if there is a failure in fetching data.
- **Loading State**: Shows a loading message while the weather data is being fetched.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Open-Meteo API**: Provides weather data for the given coordinates.
- **CSS**: For styling the application.

## Live Demo

You can try the live version of the WeatherNow app by visiting the following link:
[Live WeatherNow App](https://your-live-link-here.com)

## Setup and Installation

To run the WeatherNow application locally on your machine, follow these steps:

### Prerequisites

Ensure that you have the following installed:
- **Node.js** (Download from [nodejs.org](https://nodejs.org/))
- **npm** (Node Package Manager, usually installed with Node.js)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Krishnapal-rajput/WeatherNow.git
2. Navigate into the project directory:
    ```bash
    cd WeatherNow
3. **Install the dependencies:**
    ```bash
    npm install
4. **Run the development server:**
    ```bash
    npm start
This will start the React app locally. Open your browser and go to <code>http://localhost:1234</code> to view the app.

## Usage
- Enter a city name into the search bar.
- Click "Check Weather" to fetch the current weather data for that city.
- View the weather data once it's loaded (including temperature, wind speed, etc.).
- If the city is not found or there’s an error, an error message will be displayed.

## Code Structure
- <code>src/</code>:
    - <code>App.js</code>: Main component where the weather data is fetched and displayed.
    - <code>WeatherDisplay.js</code>: Component responsible for displaying the weather details after successful data retrieval.
    - <code>App.css</code>: Styles for the app.

## API Used
The weather data is fetched from the [Open-Meteo API](https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true), which provides free weather data for various locations based on coordinates.

## Error Handling
- If the city is not found, a message saying "City not found" will be displayed.
- If there’s an issue with the API or fetching the data, an error message will prompt the user to try again.

## Contributions
Contributions are welcome! If you want to add new features, fix bugs, or improve the documentation, feel free to fork the repository, create a branch, and submit a pull request.

## License
This project is open source and available under the [MIT License](./LICENSE).