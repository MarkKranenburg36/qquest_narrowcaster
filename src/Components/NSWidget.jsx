import { useEffect, useState } from "react";
import { getNearByStations } from "../API-requests/NS-API";
import StationWidget from "./StationWidget";
import NsLogo from './../../public/assets/Images/NS-Logo.png';
import './NS.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const NSWidget = () => {
    const [stations, setStations] = useState([]);
    const [error, setError] = useState(null);

    const settings = {
        dots: false,
        Infinite: true,
        arrows: false,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 10000
    }

    useEffect(() => {
        const fetchStations = async () => {
            try {
                const nearByStations = await getNearByStations();
                setStations(nearByStations.payload);
            } catch (error) {
                console.error('Error fetching nearby stations:', error);
                setError('Error fetching nearby stations');
            }
        };
        fetchStations();
        console.log(stations);
    }, []);

    const renderStations = (station) => (
        station &&
            <div className="widget-ut" key={station.UICCode}>
                <p className="stationHeader">
                    <img src={NsLogo} className="ns-logo" alt="NS Logo" />
                    {station.namen.lang}
                </p>
                <div className="NSspacing bg-yellow-dark">
                    <p>Tijd</p>
                    <p>Bestemming</p>
                    <p>Trein</p>
                    <p className="platformHeader">Perron</p>
                </div>
                <StationWidget stationID={station.UICCode} />
            </div>
    );

    // const renderSingleStation = () => {
    //     if (stations.length === 0) return <p>No stations available</p>;
    //     const station = stations.find(station => station.namen.lang === 'Utrecht CS') || stations[0];

    //     return (
    //         <div className="widget-ut" key={station.UICCode}>

    //             <p className="stationHeader">
    //                 <img src={NsLogo} className="ns-logo" alt="NS Logo" />
    //                 {station.namen.lang}
    //             </p>
    //             <div className="NSspacing bg-yellow-dark">
    //                 <p>Tijd</p>
    //                 <p>Bestemming</p>
    //                 <p>Trein</p>
    //                 <p className="platformHeader">Perron</p>
    //             </div>
    //             <StationWidget stationID={station.UICCode} />
    //         </div>
    //     );
    // };

    return (
        <div className="stations widget bg-yellow-light">
            {error ? (
                <p>{error}</p>
            ) : (
                <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={10000}
            transitionTime={1000}
        >
                    <div>
                        {renderStations(stations[0])}
                    </div>
                    <div>
                        {renderStations(stations[1])}
                    </div>
                </Carousel>
            )}
        </div>
    );
};

export default NSWidget;
