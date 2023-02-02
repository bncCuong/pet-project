import { Link } from 'react-router-dom';

const Weather = () => {
    return (
        <Link to={'/weather'}>
            <div>Weather on the words</div>
        </Link>
    );
};
export default Weather;
