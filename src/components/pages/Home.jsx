import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header/Header';
import Navbar from '../Layout/Navbar/NavBar';
const Home = (props) => {
    return (
        <div className="w-full flex flex-col">
            <Header />
            <div className="flex">
                <Navbar />
                <div className=" relative w-[75%]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;
