import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTemperature4 } from '@fortawesome/free-solid-svg-icons';
const SearchCity = (props) => {
    const [city, setCity] = useState('');

    const submitHanler = (e) => {
        e.preventDefault();
        props.getCityName(city);
        setCity('');
    };

    const inputChangeHanler = (e) => {
        setCity(e.target.value);
    };
    return (
        <form onSubmit={submitHanler} className="flex-[33%] relative" autoComplete="off">
            <FontAwesomeIcon icon={faTemperature4} className="text-xl text-white absolute top-2" />
            <input
                autoComplete="off"
                name="search-city"
                className="bg-transparent outline-none border-b-2 border-gray-400 py-1 px-5 text-white placeholder:text-xs placeholder:text-white"
                placeholder="Hồ Chí Minh, Việt Nam "
                value={city}
                onChange={inputChangeHanler}
            />
            <FontAwesomeIcon icon={faSearch} className="absolute top-3 right-8 text-sm text-white" />
        </form>
    );
};
export default SearchCity;
