import MenuList from './MenuList';
import TimeAndDate from './TimeAndDate';
const Navbar = () => {
    return (
        <div className="w-[25%] h-screen border-r-[2px] border-gray-900 py-1">
            <TimeAndDate />
            <MenuList />
        </div>
    );
};

export default Navbar;
