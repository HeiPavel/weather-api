import fetch from 'node-fetch';

const handler = async (event) => {
    const apiKey = process.env.PHOTO_API_KEY;
    const url = `https://api.unsplash.com/photos/random?client_id=${apiKey}`;
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