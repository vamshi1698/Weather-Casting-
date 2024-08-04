const userCity = document.getElementById("city");
const userIcon = document.getElementById("icon");
const userCelsius = document.getElementById("celsius");
const userCText = document.getElementById("c-text");
const userTime = document.getElementById("time");
const userDay = document.getElementById("day");
const userDate = document.getElementById("date");
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

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
     .then((weatherData)=>{
        userCity.innerText = weatherData.location.name;
        userCText.innerText = weatherData.current.condition.text;
        userIcon.src = weatherData.current.condition.icon;
        userCelsius.innerText = Math.ceil(weatherData.current.temp_c);
        userTime.innerText = weatherData.location.localtime.split(" ")[1];
        userDate.innerText = weatherData.location.localtime.split(" ")[0];
        const day = new Date();
        userDay.innerText = days[day.getDay()]; 
    })
     .catch((error) => {
     console.error('Error fetching data:', error);
    });