import Header from '../Layout/Header';
import Navbar from '../Layout/NavBar';
const Home = (props) => {
    return (
        <div className="w-full flex flex-col">
            <Header />
            <div className="flex">
                <Navbar />
                <div className=" w-[75%]">{props.children}</div>
            </div>
        </div>
    );
};

export default Home;
