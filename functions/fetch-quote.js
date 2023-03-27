import fetch from "node-fetch";

const handler = async (event) => {
    const url = 'https://api.quotable.io/random?tags=philosophy|history|technology|famous-quotes&maxLength=140';
    try {
        const response = await fetch(url);
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