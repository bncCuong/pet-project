import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faPlusMinus } from '@fortawesome/free-solid-svg-icons';
import sunRise from '../../../../assets/weather-sun.jpg';
import { useGetCurrentForecastQuery } from '../../../../redux/services/weather-services';
import Loading from '../../Loading';
import Error from '../../Error';
import HourlyWeather from './HourlyWeather';
import SearchCity from './SearchCity';
import { useState } from 'react';

const WeatherPage = (props) => {
    const [unitF, setUnitF] = useState('fasle');
    const { data, isFetching, error } = useGetCurrentForecastQuery('tokyo');
    if (isFetching) return <Loading />;
    if (error) return <Error />;
    const {
        location: { name, country, localtime },
        current: {
            humidity,
            temp_c,
            temp_f,
            wind_kph,
            condition: { text, icon: icon_day },
        },
    } = data;

    const changeUnitToCHanler = () => {
        setUnitF(true);
    };

    const changeUnitToFHanler = () => {
        setUnitF(false);
    };
    const { hour } = data.forecast.forecastday[0];
    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-white ">
            <img src={sunRise} alt="sunimage" className="absolute object-contain" />

            <div className="absolute flex flex-col p-5 w-full h-screen">
                <div className="h-[180px] flex ">
                    <div className="w-[200px] flex-[33%]">
                        <p className="text-xl text-white font-semibold">
                            {name}, {country}
                        </p>
                        <p className="text-[13px] mt-5">
                            The air quality is generally acceptable for most individuals. However, sentitive groups may
                            experience minor to moderate symptoms from long-term exposure
                        </p>
                    </div>
                    <div className=" flex-[33%] flex gap-2 text-black ml-9">
                        <div>
                            <p className="relative ">
                                <span className="text-[60px]">{unitF ? temp_c : temp_f} </span>
                                <FontAwesomeIcon icon={faCircle} className="absolute top-7 left-18 " />
                            </p>
                            <p className="text-[40px]">{humidity}%</p>
                        </div>
                        <div className="relative">
                            <p className="relative">
                                <FontAwesomeIcon icon={faPlusMinus} className="text-[30px] absolute top-10 ml-3" />
                                <span className="text-[40px] absolute top-2 ml-7">{unitF ? 3 : 6}</span>
                            </p>
                            <p className="absolute text-xs w-[120px] bottom-10 ">Wind: {wind_kph} mph</p>
                        </div>
                    </div>
                    <SearchCity inputChangeHanler />
                </div>

                <div className="relative text-white h-full mt-4">
                    <span>WeatherForecast</span>
                    <p className="uppercase  w-[500px] font-semibold ">
                        national weather(unit:
                        <button onClick={changeUnitToCHanler} className="ml-1">
                            <FontAwesomeIcon className="w-2 mb-1" icon={faCircle} />
                            <span>C</span>
                        </button>
                        <button onClick={changeUnitToFHanler} className="ml-2">
                            <FontAwesomeIcon className="w-2 mb-1" icon={faCircle} />
                            <span>F</span>
                        </button>
                        )
                    </p>
                    <div className="text-5xl mt-8 ">
                        <p>{text}</p>
                    </div>
                    <div className="flex mt-10 gap-2 items-center  w-[320px] text-gray-800 ">
                        <img alt="weather_icon" src={icon_day} />
                        <p className="text-xl ">
                            {name} - {localtime}
                        </p>
                    </div>
                    <div></div>
                </div>

                <HourlyWeather unit={unitF} data={hour} />
            </div>
        </div>
    );
};
export default WeatherPage;
