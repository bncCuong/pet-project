import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux/es/exports';
import { loginActions } from '../../stores/store/actions/login-slice';
import { useNavigate } from 'react-router-dom';
const Login = (props) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const auth = getAuth();

    const loginWhitGoolgeHanler = async () => {
        const provider = new GoogleAuthProvider();
        const reponse = await signInWithPopup(auth, provider);
        dispatch(loginActions.getInfoUser(reponse.user));
        if (reponse.user.uid) {
            navigate('/');
        }
    };

    return (
        <div className="mt-[50px] flex flex-col items-center">
            <p className="text-2xl font-semibold mb-5 relative"> Welcome to my PROJECT</p>
            <button
                onClick={loginWhitGoolgeHanler}
                className="border-[2px] border-gray-400 px-4 py-1 rounded-xl flex items-center gap-3 hover:bg-gray-300 "
            >
                <img src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg" alt="google-icon" />
                <span className="text-gray-800 pb-[2px] font-semibold">Login whit Goolge</span>
            </button>
        </div>
    );
};
export default Login;
