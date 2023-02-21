import MenuList from './MenuList';
import MusicChill from './MusicChill';
import TimeAndDate from './TimeAndDate';
import Weather from './Weather';
const Navbar = () => {
    return (
        <div className="w-[25%] h-screen border-r-[2px] border-gray-900/80 py-1 bg-gradient-to-b from-[#FFAFBD] to-[#C9FFBF]">
            <TimeAndDate />
            <MenuList />
            <Weather />
            {/* <MusicChill /> */}
        </div>
    );
};

export default Navbar;
