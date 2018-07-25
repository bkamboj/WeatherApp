import axios from 'axios';

const API_KEY = "f6e1ad397f8fff56292656457de712e4";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);

    console.log('Request', request);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}