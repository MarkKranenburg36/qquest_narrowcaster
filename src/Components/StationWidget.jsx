import { useQuery } from '@tanstack/react-query';
import { getTravelInfo } from '../API-requests/NS-API';
import './NS.css';
import { Carousel } from 'react-responsive-carousel';


export default function StationWidget({ stationID }) {
    const url = `/api/departures?stationID=${stationID}&maxJourneys=40`
    const { data, error, loading } = useQuery({ queryKey: ['departureInfo', stationID], queryFn: async () => await getTravelInfo(url), staleTime: 0, cacheTime: 60 * 1000, refetchInterval: 60 * 1000 },)

    const DISTANCES = {
        UC: 13,
        UVR: 8
    }

    let listOfTrains = data ? data.payload.departures.slice() : [];
    if (listOfTrains.length > 0) listOfTrains.pop();

    const futureDepartures = (data, walkingTime) => {
        const now = new Date()
        now.setMinutes(now.getMinutes() + walkingTime);

        const newTime = now.toLocaleTimeString();

        const futureDepartures = data.map(departure => {
            const departureDateTime = departure.plannedDateTime
            const date = new Date(departureDateTime)
            const departureTime = date.toLocaleTimeString();

            const newData = { ...departure, departureTime: departureTime }
            return newData
        }).filter(departure => departure.departureTime > newTime)

        return futureDepartures
    }

    let futureTrains;

    if (stationID == 8400621) {
        futureTrains = futureDepartures(listOfTrains, DISTANCES.UC)
    } else {
        futureTrains = futureDepartures(listOfTrains, DISTANCES.UVR)
    }

    return (
        <div className='departuresList'>
            {(listOfTrains && futureTrains) ? (
                futureTrains.map((departure, index) => (
                    <div className={`utrechtCSTrainDataContainer ${index % 2 === 0 ? 'bg-yellow-light' : 'bg-yellow-dark'}`} style={index >= 7 ? { display: 'none' } : { display: "grid" }} key={departure.UICCode}>
                        <p className='time'>{departure.actualDateTime.split('T')[1].split(':').slice(0, 2).join(':')}</p>
                        <div>
                            <p className='destination'>{departure.direction}</p>
                            {departure.messages.length > 0 ?
                            <div className='infoTab'>
                                <Carousel
                                className='infoCarousel'
                                autoPlay
                                infiniteLoop
                                showThumbs={false}
                                showStatus={false}
                                showArrows={false}
                                showIndicators={false}
                                interval={6000}
                                transitionTime={1000}>
                                {departure.routeStations.length > 0 ?
                                    <p className='routeVia'>{departure.routeStations.map(routeStation => routeStation.mediumName).join(', ')}</p>
                                    : (
                                        <p className='routeVia'>No route available</p>
                                    )}
                                {departure.messages.length > 0 && departure.messages.map((message, index) => <p key= {index} className='meldingen'>* {message.message}</p>)}
                                </Carousel>
                            </div> :
                            <div className='infoTab'>
                               {departure.routeStations.length > 0 ?
                                    <p className='routeVia'>{departure.routeStations.map(routeStation => routeStation.mediumName).join(', ')}</p>
                                    : (
                                        <p className='routeVia'>No route available</p>
                                    )} 
                            </div>}
                        </div>
                        <p className='platform'>{departure.actualTrack}</p>
                        <p className='train-product'>{departure.product.categoryCode}</p>
                    </div>
                ))
            ) : (
                <p>No stations available</p>
            )}
        </div>
    )
}