import { useEffect, useRef, useState } from 'react';


const WeatherMapWidget = ({className}) => {
    const weatherMapWidgetRef = useRef(null);
    const [weatherMapSrc, setWeatherMapSrc] = useState('');

    useEffect(() => {
        const setSizeIframe = () => {
          if (weatherMapWidgetRef.current) {
            const src = `https://image.buienradar.nl/2.0/image/single/RadarMapRainNL?height=200&width=200&renderBackground=True&renderBranding=False&renderText=True&timestamp=${Date.now()}`;
            setWeatherMapSrc(src);
          }
        };
    
        setSizeIframe();
    
        const intervalId = setInterval(setSizeIframe, 2 * 60 * 1000);
        window.addEventListener('resize', setSizeIframe);
    
        return () => {
          clearInterval(intervalId);
          window.removeEventListener('resize', setSizeIframe);
        };
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