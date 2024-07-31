import { useEffect, useState } from "react";
import { fetchWeatherData } from "../API-requests/CurrentWeather-API"
import { fetchForcastWeatherData } from "../API-requests/ForcastWeather-API";

export const WeatherForcast = () => {
    const [forcastOne, setForcastOne] = useState({
        hour: '',
        icon: '',
        temp: ''
    });

    const [forcastTwo, setForcastTwo] = useState({
        hour: '',
        icon: '',
        temp: ''
    });

    const [forcastThree, setForcastThree] = useState({
        hour: '',
        icon: '',
        temp: ''
    });
    const [currentHour, setCurrentHour] = useState(new Date().getHours());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHour(new Date().getHours());
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const getForecastData = async () => {
            const forcastData = await fetchForcastWeatherData();
            if (forcastData) {
                const indexHourOne = (currentHour + 1);
                setForcastOne((prevState) => ({
                    ...prevState,
                    hour: (currentHour + 1).toString() + ':00',
                    icon: forcastData.forecast.forecastday[0].hour[indexHourOne].condition.icon,
                    temp: Math.floor(forcastData.forecast.forecastday[0].hour[indexHourOne].temp_c).toString() + '°C'
                }));
                const indexHourTwo = (currentHour + 2);
                setForcastTwo((prevState) => ({
                    ...prevState,
                    hour: (currentHour + 2).toString() + ':00',
                    icon: forcastData.forecast.forecastday[0].hour[indexHourTwo].condition.icon,
                    temp: Math.floor(forcastData.forecast.forecastday[0].hour[indexHourTwo].temp_c).toString() + '°C'
                }));
                const indexHourThree = (currentHour + 3);
                setForcastThree((prevState) => ({
                    ...prevState,
                    hour: (currentHour + 3).toString() + ':00',
                    icon: forcastData.forecast.forecastday[0].hour[indexHourThree].condition.icon,
                    temp: Math.floor(forcastData.forecast.forecastday[0].hour[indexHourThree].temp_c).toString() + '°C'
                }));
            }
        };

        getForecastData();
    }, [currentHour]);


    return (
        <div className="widget widget-bg-light forcastWidget">
            <div className="forcastOne">
                <p>{forcastOne.hour}</p>
                <img src={forcastOne.icon}></img>
                <p>{forcastOne.temp}</p>
            </div>
            <div className="forcastTwo">
                <p>{forcastTwo.hour}</p>
                <img src={forcastTwo.icon}></img>
                <p>{forcastTwo.temp}</p>
            </div>
            <div className="forcastThree">
                <p>{forcastThree.hour}</p>
                <img src={forcastThree.icon}></img>
                <p>{forcastThree.temp}</p>
            </div>
        </div>
    )
}