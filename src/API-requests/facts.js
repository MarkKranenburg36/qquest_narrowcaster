export async function factsApi() {
    
    const response = await fetch("https://api.api-ninjas.com/v1/facts", {
        method: 'GET',
        headers: { 'X-Api-Key': 'iOer3nTeBq7kMs1Q5NSlQQ==88YiAeR9XOYBsiud' }
    })
    if(response.ok){
        return response.json();
    }
    throw new Error('Failed to fetch facts API');
}