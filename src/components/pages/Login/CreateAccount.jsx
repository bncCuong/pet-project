import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../../redux/store/actions/login-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

const CreateAccount = ({ signIn, showPassword, showPasswordHanler, swapHanler }) => {
    const dispatch = useDispatch();

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
                userPassword: passwordValue,
            }),
        );
        resetAccount();
        resetEmail();
        resetpassword();
        resetRePassword();

        swapHanler();
    };

    return (
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
    );
};

export default CreateAccount;
