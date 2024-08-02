 const p = document.getElementById("p")
const IPURL = "https://ipapi.co/json/";
const URL = "https://api.weatherapi.com/v1/current.json"; 
const KEY = "dd2cb164721d41d9a9e133632240405";
fetch(`${IPURL}`)
  .then((response) => response.json())
      .then((data) => {
         const latitude = data.latitude;
         const longitude = data.longitude;
         return fetch(`${URL}?key=${KEY}&q=${latitude},${longitude}`);
        } )
     .then((response) => response.json())
     .then((weatherData) => {
          p.innerText =  JSON.stringify(weatherData);
     })
     .catch((error) => {
     console.error('Error fetching data:', error);
    });
