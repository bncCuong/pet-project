import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { loginActions } from '../../../redux/store/actions/login-slice';
import useInput from '../../hooks/useInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

const LoginFromValidate = () => {
    const [login, setLogin] = useState(true);
    const [signIn, setSignIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    // const [disableBtnSignUp, setDisableBtnSignUp] = useState(true);

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
    const sunmitLoginHanler = (e) => {
        e.preventDefault();
    };

    const loginWhitGoolgeHanler = async () => {
        const provider = new GoogleAuthProvider();
        const reponse = await signInWithPopup(auth, provider);
        dispatch(loginActions.getInfoUser(reponse.user));
        if (localStorage.getItem('uid')) {
            navigate('/today');
        }
    };

    useEffect(() => {
        if (localStorage.getItem('uid')) {
            navigate('/today');
        }
    }, [navigate]);

    const {
        value: accountValue,
        changeInputHanler: accountChangeInputHanler,
        clickInputHanler: accountClickInputHanler,
        hasError: accountError,
        resetInput: resetAccount,
        touchInputHanler: accountTouchInputHanler,
        valueIsValid: accountIsValid,
    } = useInput((value) => value.trim() !== '');

    const {
        value: emailValue,
        changeInputHanler: emailChangeInputHanler,
        clickInputHanler: emailClickInputHanler,
        touchInputHanler: emailTouchInputHanler,
        hasError: emailError,
        resetInput: resetEmail,
        valueIsValid: emailIsValid,
    } = useInput((value) => value.includes('@'));
    const {
        value: passwordValue,
        changeInputHanler: passwordChangeInputHanler,
        clickInputHanler: passwordClickInputHanler,
        touchInputHanler: passwordTouchInputHanler,
        hasError: passwordError,
        resetInput: resetpassword,
        valueIsValid: passwordIsValid,
    } = useInput((value) => value.length >= 6);

    const {
        value: rePasswordValue,
        changeInputHanler: rePasswordChangeInputHanler,
        clickInputHanler: rePasswordClickInputHanler,
        touchInputHanler: rePasswordTouchInputHanler,
        hasError: rePasswordError,
        resetInput: resetRePassword,
        valueIsValid: rePasswordIsValid,
    } = useInput((value) => value.length >= 6);

    const samePassword = passwordValue === rePasswordValue;
    let signUpValid = false;
    if (accountIsValid && emailIsValid & passwordIsValid && rePasswordIsValid) {
        signUpValid = true;
    }

    const submitSignUpHanler = (e) => {
        e.preventDefault();
        dispatch(
            loginActions.createNewUser({
                id: Math.floor(Math.random() * 123456),
                userName: accountValue,
                userEmail: emailValue,
            }),
        );
        resetAccount();
        resetEmail();
        resetpassword();
        resetRePassword();
    };

    const user = useSelector((state) => state.login.account);
    console.log(user);
    return (
        <div className="w-[1000px] h-[540px] bg-white rounded-xl overflow-hidden shadow-xl shadow-slate-600 relative flex ">
            <div
                className={`w-full h-full flex flex-col items-center  bg-white mt-10 px-10 ${
                    login ? 'opacity-1 z-20 animate-moveleft' : 'opacity-0 -translate-x-[100%]'
                }`}
            >
                <h1 className="text-3xl font-bold ">Sign in</h1>
                <div className="mt-5">
                    <button
                        onClick={loginWhitGoolgeHanler}
                        className="border-[2px] border-gray-400 px-4 py-1 rounded-xl flex items-center gap-3 hover:bg-gray-400"
                    >
                        <img
                            src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg"
                            alt="google-icon"
                        />
                        <span className="text-gray-800 pb-[2px] font-semibold">Login whit Goolge</span>
                    </button>
                </div>

                <p className="mt-5 font-semibold">Or use your account</p>
                <form className="w-full px-10 flex flex-col items-center relative" onSubmit={sunmitLoginHanler}>
                    <div className="w-[100%] h-10 overflow-hidden rounded-lg  my-4 ">
                        <input
                            className="w-full h-full bg-slate-300/40 placeholder:text-gray-500 px-5 pb-[2px] outline-none"
                            type="text"
                            placeholder="text: bncCuong"
                        />
                    </div>
                    <p
                        className={`text-gray-400 absolute right-14 top-20 cursor-pointer hover:text-black }`}
                        onClick={showPasswordHanler}
                    >
                        <FontAwesomeIcon icon={faEye} />
                    </p>
                    <div className="w-[100%] h-10 overflow-hidden rounded-lg ">
                        <input
                            className="w-full h-full bg-slate-300/40 placeholder:text-gray-500 px-5 pb-[2px] outline-none"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password: 123456"
                        />
                    </div>

                    <div className="mt-4 ml-36 flex items-center justify-end">
                        <input type="checkbox" id="checked" name="checked" />
                        <label htmlFor="checked" className="text-sm text-gray-400 ml-2">
                            Remember your password
                        </label>
                    </div>

                    <p className="text-sm text-gray-400 mt-4 cursor-pointer ml-48">Forgot your password ?</p>

                    <button
                        type="submit"
                        className="uppercase font-semibold bg-gradient-to-l from-orange-500 to-pink-600 flex items-center justify-center px-8 py-1 border-[1px] rounded-2xl mt-10"
                    >
                        sign in
                    </button>
                </form>
            </div>

            <div
                className={`w-full h-full flex flex-col  items-center mt-10 ${
                    signIn ? 'opacity-1 animate-moveright z-20' : 'opacity-0 translate-x-[100%]'
                }  `}
            >
                <h1 className="text-3xl font-bold ">Create Account</h1>

                <form
                    className="w-full mt-10 px-14 flex flex-col items-center
                "
                >
                    <div className="w-[100%] h-10 overflow-hidden   my-4 ">
                        <input
                            className={`w-full h-full bg-slate-300/40 placeholder:text-gray-500 px-5 pb-[2px] rounded-lg outline-none border-[1px]
                          ${!accountError ? 'border-transparent' : ' border-red-500'}`}
                            type="text"
                            placeholder="Account"
                            value={accountValue}
                            onChange={accountChangeInputHanler}
                            onBlur={accountTouchInputHanler}
                            onClick={accountClickInputHanler}
                        />
                        {accountError && <p className="text-red-500 text-xs ml-2 absolute">Enter your account</p>}
                    </div>

                    <div className="w-[100%] h-10 overflow-hidden rounded-lg  my-4 ">
                        <input
                            className={`w-full h-full bg-slate-300/40 placeholder:text-gray-500 px-5 pb-[2px] outline-none border-[1px] rounded-lg ${
                                emailError ? 'border-red-500' : 'border-transparent'
                            } `}
                            type="text"
                            placeholder="Email"
                            value={emailValue}
                            onChange={emailChangeInputHanler}
                            onBlur={emailTouchInputHanler}
                            onClick={emailClickInputHanler}
                        />
                        {emailError && <p className="text-red-500 text-xs ml-2 absolute">Enter your email</p>}
                    </div>

                    <div className=" relative w-[100%] h-10  rounded-lg  my-4 ">
                        <input
                            className={`w-full h-full bg-slate-300/40 placeholder:text-gray-500 px-5 pb-[2px] outline-none border-[1px] rounded-lg ${
                                passwordError ? 'border-red-500' : 'border-transparent'
                            }`}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={passwordValue}
                            onChange={passwordChangeInputHanler}
                            onClick={passwordClickInputHanler}
                            onBlur={passwordTouchInputHanler}
                        />
                        {passwordError && (
                            <p className="text-red-500 text-xs ml-2 absolute top-11 ">
                                Password must be more than 6 characters
                            </p>
                        )}

                        <p
                            className={`text-gray-400 absolute right-4 bottom-2 cursor-pointer hover:text-black }`}
                            onClick={showPasswordHanler}
                        >
                            <FontAwesomeIcon icon={faEye} />
                        </p>
                    </div>

                    <div className=" relative w-[100%] h-10  rounded-lg  my-4 ">
                        <input
                            className={`w-full h-full bg-slate-300/40 placeholder:text-gray-500 px-5 pb-[2px] outline-none border-[1px] rounded-lg ${
                                rePasswordError ? 'border-red-500' : 'border-transparent'
                            }
                                `}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={rePasswordValue}
                            onChange={rePasswordChangeInputHanler}
                            onClick={rePasswordClickInputHanler}
                            onBlur={rePasswordTouchInputHanler}
                        />
                        {rePasswordError && (
                            <p className="text-red-500 text-xs ml-2 absolute top-11 ">
                                Password must be more than 6 characters
                            </p>
                        )}

                        {!samePassword && !rePasswordError && (
                            <p className="text-xs text-red-500 ml-4">Password must be same</p>
                        )}
                    </div>

                    <button
                        disabled={!signUpValid}
                        type="submit"
                        onClick={submitSignUpHanler}
                        className={`uppercase font-semibold flex items-center w-fit justify-center px-6 py-1 border-[1px] 
                        rounded-2xl  mt-2 ${
                            signUpValid ? 'bg-gradient-to-l from-orange-600 to-pink-700' : 'bg-slate-500'
                        } `}
                    >
                        sign up
                    </button>
                </form>
            </div>

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
