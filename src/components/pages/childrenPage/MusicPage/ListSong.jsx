import { useGetMusicDataQuery } from '../../../../redux/services/music-services';

import Error from '../../Error';
import CardSong from './CardSong';

const ListSong = () => {
    // const { data: Listsongs, isFetching, error } = useGetMusicDataQuery();
    // if (error) return <Error />;
    // if (isFetching) return <Loading />;
    // console.log(Listsongs);
    return <div className="w-full p-5">{/* <CardSong song={Listsongs} /> */}</div>;
};

export default ListSong;
