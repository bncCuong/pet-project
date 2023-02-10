import musicIcon from '../../../assets/Musicloader.svg';
import { Link } from 'react-router-dom';

const MusicChill = () => {
    return (
        <Link to={'/music'} className="flex mt-3 items-center ">
            <div>Music chill</div>
            <img src={musicIcon} alt="music icon" className="w-14 h-14 pb-3 " />
        </Link>
    );
};
export default MusicChill;
