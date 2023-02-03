const API_KEY = 'bc8a11406fc342206116bb24c1a24a78';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({ ...searchParams, append: API_KEY });

    console.log(url);
    return fetch(url)
        .then((res) => res.json())
        .then((data) => data);
};

export default getWeatherData;
