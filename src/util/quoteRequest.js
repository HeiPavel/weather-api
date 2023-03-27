export const fetchQuote = async () => {
    try {
        const response = await fetch('/.netlify/functions/fetch-quote');
        const json = await response.json();
        return json;
    } catch(error) {
        console.log(error);
    }
}