export async function sendGetRequest(path, errorMessage) {
    try {
        const host = 'http://localhost:8080';
        const response = await fetch(host + path, {
            method: 'GET',
            headers: {  
            }
        });

        // return response;
        if (response.ok) {
            const json = await response.json();
            return json;
        } 
        
        window.alert('GET Request failed: ' + errorMessage);
        return undefined;
    } catch (error) {
        console.error('Cannot send GET request:' + error);
    }
}

export default async function sendRequest(method, path, data, errorMessage) {
    try {
        const host = 'http://localhost:8080';

        const response = await fetch (host + path, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // return response;
        if (response.ok) {
            const json = await response.json();
            return json;
        } 
        
        window.alert( method + ' request failed: ' + errorMessage);
        return undefined;
    } catch(error) {
        console.error('Cannot send request: ' + error);
    }
}