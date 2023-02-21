import { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ loginWhitGoolgeHanler, showPasswordHanler, login, showPassword }) => {
    const [accountValue, setAccountValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const { userName, userPassword } = useSelector((state) => state.login.account);
    console.log(userName, userPassword);

    const navigate = useNavigate();

    const submitLoginHanler = (e) => {
        e.preventDefault();

        if (userName === accountValue && userPassword === passwordValue) {
            navigate('/today');
        } else {
            console.log('wrong somthing');
        }
    };
    return (
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
            <form className="w-full px-10 flex flex-col items-center relative" onSubmit={submitLoginHanler}>
                <div className="w-[100%] h-10 overflow-hidden rounded-lg my-4 ">
                    <input
                        className="w-full h-full bg-slate-300/40 placeholder:text-gray-500 px-5 pb-[2px] outline-none"
                        type="text"
                        placeholder="text: bncCuong"
                        value={accountValue}
                        onChange={(e) => setAccountValue(e.target.value)}
                    />
                </div>
                <p
                    className={`text-gray-400 absolute right-14 top-[92px] cursor-pointer hover:text-black }`}
                    onClick={showPasswordHanler}
                >
                    <FontAwesomeIcon icon={faEye} />
                </p>
                <div className="w-[100%] h-10 overflow-hidden rounded-lg mt-3">
                    <input
                        className="w-full h-full bg-slate-300/40 placeholder:text-gray-500 px-5 pb-[2px] outline-none"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password: 123456"
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
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
    );
};

export default SignIn;
