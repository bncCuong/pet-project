import sunImage from '../../../assets/weather-sun.jpg';

const WeatherPage = () => {
    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-white flex justify-center ">
            <img src={sunImage} alt="sunimage" className="absolute object-contain" />
            <div className="absolute p-5">weather</div>
        </div>
    );
};
export default WeatherPage;
