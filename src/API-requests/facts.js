const FACTS_API_KEY = import.meta.env.VITE_FACTS_API_KEY
export async function factsApi() {
    
    const response = await fetch("https://api.api-ninjas.com/v1/facts", {
        method: 'GET',
        headers: { 'X-Api-Key': `${FACTS_API_KEY}` }
    })
    if(response.ok){
        return response.json();
    }
    throw new Error('Failed to fetch facts API');
}