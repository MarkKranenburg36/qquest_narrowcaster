const API_KEY = import.meta.env.VITE_FORECAST_API_KEY

export const fetchWeatherData = async () => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Utrecht`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};