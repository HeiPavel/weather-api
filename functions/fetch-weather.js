import fetch from 'node-fetch';

handler = async (event) => {
    const {lat, lon} = event.queryStringParameters;
    console.log(event.queryStringParameters);
    console.log('lat: ', lat, 'lon: ', lon);
    const apiKey = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify({data: jsonResponse})
        }
    } catch(error) {
        const {status, statusText, headers, data} = error.response;
        return {
            statusCode: status,
            body: JSON.stringify({status, statusText, headers, data})
        }
    }
}

module.exports = {handler};