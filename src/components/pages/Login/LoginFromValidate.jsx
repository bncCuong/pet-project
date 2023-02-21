import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { loginActions } from '../../../redux/store/actions/login-slice';

import CreateAccount from './CreateAccount';
import SignIn from './SignIn';

const LoginFromValidate = () => {
    const [login, setLogin] = useState(true);
    const [signIn, setSignIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    // const { userName } = useSelector((state) => state.login.account);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const auth = getAuth();

    const swapHanler = () => {
        setLogin((prev) => !prev);
        setSignIn((prev) => !prev);
    };

    const showPasswordHanler = () => {
        setShowPassword((prev) => !prev);
    };

    const loginWhitGoolgeHanler = async () => {
        const provider = new GoogleAuthProvider();
        const reponse = await signInWithPopup(auth, provider);

        dispatch(loginActions.getInfoUser(reponse.user));

        if (localStorage.getItem('uid')) {
            navigate('/today');
        }
    };

    // useEffect(() => {
    //     if (localStorage.getItem('uid')) {
    //         navigate('/today');
    //     }
    // }, [navigate]);

    return (
        <div className="w-[1000px] h-[540px] bg-white rounded-xl overflow-hidden shadow-xl shadow-slate-600 relative flex ">
            <SignIn
                loginWhitGoolgeHanler={loginWhitGoolgeHanler}
                showPasswordHanler={showPasswordHanler}
                login={login}
                showPassword={showPassword}
            />

            <CreateAccount
                signIn={signIn}
                showPassword={showPassword}
                showPasswordHanler={showPasswordHanler}
                swapHanler={swapHanler}
            />

            <div
                className={`absolute w-[50%] h-full bg-gradient-to-l from-pink-700 to-red-500 top-0 left-0 flex flex-col justify-center items-center gap-10 text-white ${
                    !signIn ? 'z-[-1] opacity-0' : 'z-30 animate-slowfade'
                } `}
            >
                <h1 className="text-3xl font-bold">Welcome Back</h1>
                <p>To keep connected whit us plese login whit your personal info</p>
                <button
                    onClick={swapHanler}
                    className="uppercase font-semibold flex items-center justify-center px-8 py-1 border-[1px] rounded-2xl"
                >
                    sign in
                </button>
            </div>
            <div
                className={`absolute w-[50%] h-full top-0 right-0 bg-gradient-to-r from-pink-700 to-red-500 text-white flex flex-col justify-center items-center gap-10 ${
                    !login ? 'z-[-1] opacity-0' : 'z-30 animate-slowfade'
                }`}
            >
                <h1 className="text-3xl font-bold">Hello, Friend</h1>
                <div className=" w-full text-base ml-16">Enter your personal details and start journey whit us</div>
                <button
                    onClick={swapHanler}
                    className="uppercase font-semibold flex items-center justify-center
                     px-8 py-1 border-[1px] rounded-2xl "
                >
                    sign up
                </button>
            </div>
        </div>
    );
};

export default LoginFromValidate;
