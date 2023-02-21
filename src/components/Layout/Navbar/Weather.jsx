import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Weather = () => {
    return (
        <Link to={'/weather'}>
            <div
                className=" relative text-white font-bold text-xl pl-4 py-2 mt-5 cursor-pointer hover:bg-gradient-to-r from-yellow-400 to-orange-400
            after:absolute  after:content-[''] after:left-1 after:top-[1rem] after:w-1 after:h-4 after:rounded-lg hover:after:bg-white after:animate-bounce "
            >
                <FontAwesomeIcon icon={faCloud} /> Weather Forecast
            </div>
        </Link>
    );
};
export default Weather;
