import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardSong = ({ song }) => {
    return (
        <>
            <div className="w-full h-12 bg-transparent border-b-[0.5px] border-[#fff]/30 rounded-[4px] hover:bg-[#55495f]/50">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faMusic} className="pt-2" />
                    <img alt="img_song" src="" className="w-8 h-8 bg-white mt-2 rounded-md" />
                    <div className="flex flex-col items-center mt-1">
                        <p className="text-sm text-white">Song</p>
                        <p className="text-xs text-gray-400">Singer</p>
                    </div>
                </div>
                <div></div>
            </div>
        </>
    );
};

export default CardSong;
