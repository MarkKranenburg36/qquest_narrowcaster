import { useEffect, useState } from "react";
import { getNearByStations } from "../API-requests/NS-API";
import StationWidget from "./StationWidget";
import NsLogo from './../../public/assets/Images/NS-Logo.png';
import './NS.css';

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

    // Commented out code for rendering multiple stations
    // const renderStations = () => (
    //     stations.map(station => (
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
    //     ))
    // );

    const renderSingleStation = () => {
        if (stations.length === 0) return <p>No stations available</p>;
        const station = stations.find(station => station.namen.lang === 'Utrecht CS') || stations[1];

        return (
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
    };

    return (
        <div className="stations widget bg-yellow-light">
            {error ? (
                <p>{error}</p>
            ) : (
                renderSingleStation()
            )}
        </div>
    );
};

export default NSWidget;
