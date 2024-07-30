import { useEffect, useRef, useState } from 'react';


const WeatherMapWidget = ({className}) => {
    const weatherMapWidgetRef = useRef(null);
    const [weatherMapSrc, setWeatherMapSrc] = useState('');
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const setSizeIframe = () => {
            if (weatherMapWidgetRef.current) {
                // const { clientWidth, clientHeight } = weatherMapWidgetRef.current;
                const src = `https://image.buienradar.nl/2.0/image/single/RadarMapRainNL?height=200&width=200&renderBackground=True&renderBranding=False&renderText=True`;
                console.log("smth")
                setWeatherMapSrc(src);
            }
        };
        setSizeIframe();
        setInterval(()=>{
           setReload(prev=>!prev)
        },[60 * 1000 * 2])
        

        window.addEventListener('resize', setSizeIframe);

    }, [reload]);

   

    

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