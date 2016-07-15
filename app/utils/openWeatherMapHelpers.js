import axios from 'axios'

const API_KEY = '225efedc54a4c1c808375fe786dcef8b';

export function getCurrentWeather(city){
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${API_KEY}`)
  .then((weather) => {
    return weather.data;
  });
}

export function fiveDayForecast(city){
  return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=${API_KEY}&cnt=5`)
  .then((forecast) =>{
    return forecast.data;
  });
}
