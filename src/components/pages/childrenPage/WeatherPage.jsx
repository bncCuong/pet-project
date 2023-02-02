import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import sunRise from '../../../assets/weather-sunset.jpg';
import { faCloudSunRain, faPlusMinus, faSearch, faTemperature4 } from '@fortawesome/free-solid-svg-icons';
const WeatherPage = () => {
    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-white ">
            <img src={sunRise} alt="sunimage" className="absolute object-contain" />
            <div className="absolute flex flex-col p-5 w-full">
                <div className="h-[180px] flex ">
                    <div className="w-[200px] flex-[33%]">
                        <p className="text-xl text-white font-semibold">Hồ Chí Minh City</p>
                        <p className="text-[13px] mt-5">
                            The air quanlity is generally accteptable for most individuals. However, sentitive groups
                            may experience minor to moderate symptoms from long-term exposure
                        </p>
                    </div>
                    <div className=" flex-[33%] flex gap-2 text-white ml-9">
                        <div>
                            <p className="relative ">
                                <span className="text-[60px]"> 20 </span>
                                <FontAwesomeIcon icon={faCircle} className="absolute top-7 left-18 " />
                            </p>
                            <p className="text-[40px]">9.8%</p>
                        </div>
                        <div className="relative">
                            <p className="relative">
                                <FontAwesomeIcon icon={faPlusMinus} className="text-[30px]  absolute top-8" />
                                <span className="text-[60px]  ml-7">3</span>
                            </p>
                            <p className="absolute text-xs w-[120px] bottom-10 ">Wind: WSW 6mph</p>
                        </div>
                    </div>
                    <div className="flex-[33%]">
                        <div className="relative">
                            <FontAwesomeIcon icon={faTemperature4} className="text-xl text-white absolute top-2" />
                            <input
                                className="bg-transparent outline-none border-b-2 border-gray-400 py-1 px-5 text-white placeholder:text-xs placeholder:text-white"
                                placeholder="Hồ Chí Minh, Việt Nam "
                            />
                            <FontAwesomeIcon icon={faSearch} className="absolute top-3 right-2 text-sm text-white" />
                        </div>
                    </div>
                </div>

                <div className="relative text-white h-full">
                    <p className="uppercase  w-10 font-semibold">national weather</p>
                    <p>WeatherForecast</p>
                    <div className="text-5xl ">
                        <p>Storm</p>
                        <p>Whit Heavy Rain</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCloudSunRain} />
                        <p>USA, Friday , Jan 3, 2023, 8:45AM</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};
export default WeatherPage;
