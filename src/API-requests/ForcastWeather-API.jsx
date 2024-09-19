const API_KEY = import.meta.env.VITE_FORECAST_API_KEY

export const fetchForcastWeatherData = async () => {    
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Utrecht&days=3`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const ForcastData = await response.json();
    return ForcastData;
};