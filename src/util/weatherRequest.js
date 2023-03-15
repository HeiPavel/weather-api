const fetchData = async (lat, lon) => {
    try {
      const response = await fetch(`/.netlify/functions/fetch-weather?lat=${lat}&lon=${lon}`);
      const jsonResponse = await response.json();
      return jsonResponse;
    } catch(error) {
      console.log(error);
    }
}

export const sendCoordinats = async () => {
    const getCoords = new Promise((res) => {
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            res({lat: latitude, lon: longitude});
        });
    });
    const {lat, lon} = await getCoords;
    const data = await fetchData(lat, lon);
    
    return data;
}