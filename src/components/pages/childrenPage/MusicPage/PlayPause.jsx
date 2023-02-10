import { faPauseCircle, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayPause = ({ isPlay }) => {
    return isPlay ? (
        <FontAwesomeIcon icon={faPlayCircle} className="w-6 h-6 mr-3" />
    ) : (
        <FontAwesomeIcon icon={faPauseCircle} className="w-6 h-6 mr-3" />
    );
};
export default PlayPause;
