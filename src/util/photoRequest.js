export const fetchPhoto = async () => {
    try {
        const response = await fetch('/.netlify/functions/fetch-photo');
        const json = await response.json();
        return json;
    } catch(error) {
        console.log(error);
    }
}