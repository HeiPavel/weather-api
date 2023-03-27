import fetch from "node-fetch";

const handler = async (event) => {
    const apiKey = process.env.QUOTE_API_KEY;
    const url = 'https://api.api-ninjas.com/v1/quotes?category=knowledge';
    const option = {
        method: 'GET',
        headers: { 'X-Api-Key': apiKey}
    };
    try {
        const response = await fetch(url, option);
        const json = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify({data: json})
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