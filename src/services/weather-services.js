import { weatherActions } from '../stores/store/actions/weather-slice';
import { DateTime } from 'luxon';
const API_KEY = 'bc8a11406fc342206116bb24c1a24a78';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = () => {
    return async (dispatch, getState) => {
        const getWeatherData = async (infoType, searchParams) => {
            const url = new URL(BASE_URL + '/' + infoType);
            url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
            // https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=bc8a11406fc342206116bb24c1a24a78
            const reponse = await fetch(url);
            return reponse.json();
        };

        try {
            function getData(data) {
                const {
                    coord: { lat, lon },
                    main: { temp, feels_like, temp_min, temp_max, humidity },
                    name,
                    sys: { country, sunrise, sunset },
                    weather,
                    wind: { speed },
                } = data;
                const { main: details, icon } = weather[0];
                return {
                    lat,
                    lon,
                    temp,
                    feels_like,
                    temp_min,
                    temp_max,
                    humidity,
                    name,
                    country,
                    sunrise,
                    sunset,
                    details,
                    icon,
                    speed,
                };
            }
            const formatLocalTime = (secs, zone, format = "cccc, dd LLL yyyy | Local time: 'hh:mm a' ") =>
                DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

            const formatForecastWeather = (data) => {
                let {
                    city: { timezone },
                    list,
                } = data;
                const hoursly = list.slice(1, 6).map((item) => {
                    return {
                        title: formatLocalTime(item.dt, timezone, 'hh:mm a'),
                        temp: item.main.temp,
                        wind: item.wind.speed,
                        icon: item.weather[0].icon,
                    };
                });
                return { timezone, hoursly };
            };
            const fomattedDataWeather = async (searchParams) => {
                const formatedCurrentWeather = await getWeatherData('weather', searchParams).then(getData);
                const { lat, lon } = formatedCurrentWeather;

                const formattedForecastWeather = await getWeatherData('forecast', {
                    lat,
                    lon,
                    units: searchParams.units,
                }).then(formatForecastWeather);
                return { ...formatedCurrentWeather, ...formattedForecastWeather };
            };
            fomattedDataWeather();
        } catch (error) {
            throw new Error('Fetching data is failed!');
        }
    };
};

// const getWeatherData = (infoType, searchParams) => {
//     const url = new URL(BASE_URL + '/' + infoType);
//     url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

//     console.log(url);
//     return fetch(url)
//         .then((res) => res.json())
//         .then((data) => data);
// };

// export default getWeatherData;
