import music_img from '../../../../assets/music.jpg';
import PlayPause from './PlayPause';
import ActionIcon from './ActionsIcon';

const InfoSong = () => {
    return (
        <div className="w-[35%]  py-16 flex flex-col items-center ">
            <div className="w-52 h-52 bg-white rounded-lg relative overflow-hidden flex items-center justify-center">
                <img alt="song_img" src={music_img} className="absolute w-[100%] h-full object-cover " />
                <div className="absolute "> play</div>
            </div>
            <div className="flex flex-col items-center mt-2">
                <p className="text-white font-bold text-lg">Title Song</p>
                <p className="text-gray-400 mt-2">Upload: 1/1/2020</p>
            </div>
            <button className="mt-4 px-7 py-2 bg-[#9b4de0] text-white rounded-3xl hover:bg-[#8b45c9] flex items-center">
                <PlayPause isPlay={true} />
                Play Song
            </button>
            <ActionIcon />
        </div>
    );
};

export default InfoSong;
