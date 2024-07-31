const NS_KEY = 'c9af8962e10e46bc92f8e98b501a3894';
const stationsUrl =  '/api/stations';

export async function getNearByStations () {
    const response = await fetch(`${stationsUrl}`, {
        method: 'GET',
        
        // Request headers
        headers: {
            'Cache-Control': 'no-cache',
            'Ocp-Apim-Subscription-Key': `${NS_KEY}`,}
    })
    if(response.ok){
        return response.json();
    }
    throw new Error('Failed to fetch NearBy Stations API');
}
 
export async function getTravelInfo (url) {
   
    const response= await fetch(url, {
        method: 'GET',
        // Request headers
        headers: {
            'Cache-Control': 'no-cache',
            'Ocp-Apim-Subscription-Key': `${NS_KEY}`,}
    },)
    if(response.ok){
        return response.json()
    }
    throw new Error('Failed to fetch Travel Info API');
}