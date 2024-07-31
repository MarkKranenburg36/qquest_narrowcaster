import { useEffect, useState } from "react";
import { getNearByStations } from "../API-requests/NS-API";
import StationWidget from "./StationWidget";
import NsLogo from './../../public/assets/Images/NS-Logo.png';
import './NS.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaWalking } from "react-icons/fa";

const NSWidget = () => {
    const [stations, setStations] = useState([]);
    const [error, setError] = useState(null);

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
    }, []);

    const renderStations = (station) => (
        station &&
        <div className="station-container" key={station.UICCode}>
            <div className="stationHeader">
                <div className="ns-logo">
                <img src={NsLogo}  alt="NS Logo" />
                </div>
                <p>{station.namen.lang}</p>
                <div className="walking">
                {station.UICCode == 8400621 ? <p>13min</p>: <p>8min</p>}
                <FaWalking size={20}/>
                </div>
            </div>
            <div className="NSspacing bg-yellow-dark">
                <p>Tijd</p>
                <p>Bestemming</p>
                <p>Trein</p>
                <p className="platformHeader">Perron</p>
            </div>
            <StationWidget stationID={station.UICCode} />
        </div>
    );


    return (
        <>
            {error ? (
                <p>{error}</p>
            ) : (
                <Carousel
                    className="stations"
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    showArrows={false}
                    showIndicators={false}
                    interval={12000}
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
        </>
    );
};

export default NSWidget;
