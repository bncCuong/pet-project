import { weatherActions } from '../stores/store/actions/weather-slice';
import { DateTime } from 'luxon';

const API_KEY = 'bc8a11406fc342206116bb24c1a24a78';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = (searchParams) => {
    return async (dispatch) => {
        const getWeatherData = async (infoType, searchParams) => {
            console.log(searchParams);

            const url = new URL(BASE_URL + '/' + infoType);
            url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
            // https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=bc8a11406fc342206116bb24c1a24a78
            const reponse = await fetch(url);
            return reponse.json();
        };

        try {
            //Hàm lấy ra những dữ liệu cần thiết nhận được từ API
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
            // Hàm format data thời tiết
            const formatForecastWeather = (data) => {
                let { timezone, daily, hourly } = data;
                daily = daily.slice(1, 6).map((d) => {
                    return {
                        title: formatLocalTime(d.dt, timezone, 'ccc'),
                        temp: d.temp.day,
                        icon: d.weather[0].icon,
                    };
                });
                hourly = hourly.slice(1, 6).map((d) => {
                    return {
                        title: formatLocalTime(d.dt, timezone, 'hh:mm a'),
                        temp: d.temp.day,
                        icon: d.weather[0].icon,
                    };
                });

                return { daily, hourly, timezone };
            };

            // Hàm format lại hiển thị ngày giờ
            const formatLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time:'hh:mm a'") =>
                DateTime.fromSeconds(secs).zone(zone).format(format);

            // Hàm trả dữ liệu nhận về rồi lưu vào store
            const formattedWeatherData = async (searchParams) => {
                const formatedCurrentWeather = await getWeatherData('weather', searchParams).then(getData);
                const { lat, lon } = formatedCurrentWeather;

                const fomattedForecastWeather = await getWeatherData('onecall', {
                    lat,
                    lon,
                    exclude: 'crrent, minutely, alerts',
                    units: searchParams.units,
                }).then(formatForecastWeather);

                return { ...fomattedForecastWeather, ...formatedCurrentWeather };
            };
            dispatch(weatherActions.addWeatherData(formattedWeatherData()));
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
