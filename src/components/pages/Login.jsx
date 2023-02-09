import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux/es/exports';
import { loginActions } from '../../redux/store/actions/login-slice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Login = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const auth = getAuth();

    const loginWhitGoolgeHanler = async () => {
        const provider = new GoogleAuthProvider();
        const reponse = await signInWithPopup(auth, provider);
        dispatch(loginActions.getInfoUser(reponse.user));
        if (localStorage.getItem('uid')) {
            navigate('/');
        }
    };

    useEffect(() => {
        if (localStorage.getItem('uid')) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <div className="mt-[50px] flex flex-col items-center">
            <p className="text-2xl font-semibold mb-5 relative"> Welcome to my PROJECT</p>
            <div className="flex items-center max-w-[730px] h-[80px] flex-col mb-14">
                <p>
                    Thank you for visiting my application. This is my first attempt at the Extended Todo App and still
                    under development so feel free to look around and give me feedback to make this app even better.
                </p>
                <p className="mt-6 text-xl font-semibold"> So let's get started</p>
            </div>
            <button
                onClick={loginWhitGoolgeHanler}
                className="border-[2px] border-gray-400 px-4 py-1 rounded-xl flex items-center gap-3 hover:bg-gray-400"
            >
                <img src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg" alt="google-icon" />
                <span className="text-gray-800 pb-[2px] font-semibold">Login whit Goolge</span>
            </button>
        </div>
    );
};
export default Login;
