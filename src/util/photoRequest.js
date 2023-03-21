export const fetchPhoto = async () => {
    const date = new Date();
    const month = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date);
    const page = Math.floor(Math.random() * 10) + 1;
    try {
        const response = await fetch(`/.netlify/functions/fetch-photo?month=${month}&page=${page}`);
        const json = await response.json();
        return json;
    } catch(error) {
        console.log(error);
    }
}