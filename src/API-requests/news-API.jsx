const CURRENT_KEY = 'vbUGjupVjZydXbadmM4XM-RcxkEsazHVLWAxiNDcpN-FeN6M';
const newsUrl =  '/api/news';

export async function getNews() {
    const response = await fetch(`${newsUrl}`, {
        method: 'GET',
        
        // Request headers
        headers: {
            'Cache-Control': 'no-cache',
            'Authorization': `${CURRENT_KEY}`
        }
    })
    console.log(response);
    if(response.ok){
        return response.json();
    }
    throw new Error('Failed to fetch news.');
}