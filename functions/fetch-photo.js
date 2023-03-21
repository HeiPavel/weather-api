import fetch from 'node-fetch';

const handler = async (event) => {
    const apiKey = process.env.PHOTO_API_KEY;
    const {month, page} = event.queryStringParameters;
    const query = `nature ${month}`;
    const url = `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${query}&page=${page}&per_page=30`;
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