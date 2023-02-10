import { useGetMusicDataQuery } from '../../../../redux/services/music-services';
// import { useGetCurrentForecastQuery } from '../../../../redux/services/weather-services';

import SearchBar from './SearchBar';
import InfoSong from './InfoSong';
import ListSong from './ListSong';
import PlayBar from './PlayBar';
const Music = () => {
    const { data } = useGetMusicDataQuery();
    console.log(data);
    // console.log(data);
    return (
        <div className="relative w-full h-screen bg-gradient-to-b from-[#34224e] to-fuchsia-900 flex flex-col">
            <SearchBar />
            <div className="flex flex-1">
                <InfoSong />
                <ListSong />
            </div>
            <PlayBar />
        </div>
    );
};
export default Music;
