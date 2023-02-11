import { useRouteError } from 'react-router-dom';
import image404 from '../../assets/404error.jpg';
import { useNavigate } from 'react-router-dom';
function Error() {
    const error = useRouteError();
    const navigate = useNavigate();
    const backHomePageHanler = () => {
        navigate('/');
    };

    const backLoginPageHanler = () => {
        navigate('/login');
    };

    return (
        <div className="flex">
            <img src={image404} alt="404Img" className="w-[50%]" />
            <div className="mt-[100px]">
                {/* <p className="text-2xl text-red-500 font-semibold">{error.data}</p> */}

                <div className="mt-5">
                    <p className="text-xl font-medium">Back To: </p>

                    <div className="mt-3 flex flex-col items-center w-[70%] gap-4">
                        <button
                            onClick={backLoginPageHanler}
                            className=" w-full border-[2px] border-gray-400 hover:bg-gray-300 rounded-xl px-4 py-1 text-neutral-800 font-semibold flex items-center justify-center gap-4"
                        >
                            <img
                                src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg"
                                alt="google-icon"
                            />
                            Login whit Google
                        </button>
                        <button
                            onClick={backHomePageHanler}
                            className=" w-full border-[2px] border-gray-400 hover:bg-gray-300 rounded-xl px-4 py-1 text-neutral-800 font-semibold"
                        >
                            Home page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Error;
