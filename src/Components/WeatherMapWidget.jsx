import React, { useEffect, useRef, useState } from 'react';


const WeatherMapWidget = ({className}) => {
    const weatherMapWidgetRef = useRef(null);
    const [weatherMapSrc, setWeatherMapSrc] = useState('');

    useEffect(() => {
        const setSizeIframe = () => {
            if (weatherMapWidgetRef.current) {
                // const { clientWidth, clientHeight } = weatherMapWidgetRef.current;
                const src = `https://image.buienradar.nl/2.0/image/single/RadarMapRainNL?height=200&width=200&renderBackground=True&renderBranding=False&renderText=True`;
                setWeatherMapSrc(src);
            }
        };

        setSizeIframe();

        window.addEventListener('resize', setSizeIframe);

    }, []);

   

    

    return (
        <div className={className}>
            <iframe
                id='WeatherMapIframe'
                ref={weatherMapWidgetRef}
                src={weatherMapSrc}
                title="Buienradar"
            />
        </div>
    )
}

export default WeatherMapWidget;