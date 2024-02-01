# Weather Forecasting Application - React

This React application is a weather forecasting app that displays a 5-day weather forecast, showing high and low temperatures daily, along with an image representing the weather conditions (sunny, rainy, cloudy, snowy). The app also allows users to click on a specific day to view its hourly forecast.

## Features

1. **5-Day Forecast:**
   - Displays high and low temperatures for each day.
   - Shows an image indicating the weather conditions.

2. **Hourly Forecast:**
   - Allows users to click on a day to view its hourly forecast.
   - Maintains the current view in the top-level App state.

3. **React Router Integration:**
   - Utilizes React Router (npm install react-router) for navigation.
   - `/` route shows the 5-day forecast.
   - `/[name-of-day]` route shows the hourly forecast for a particular day.

4. **Integration with OpenWeatherMap API:**
   - Requires a free API key from [OpenWeatherMap](https://openweathermap.org/).
   - Fetches a real 5-day forecast from the API.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Obtain a free API key from [OpenWeatherMap](https://openweathermap.org/).

