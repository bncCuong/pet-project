import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../../redux/store/actions/login-slice';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TippyStyles from '../../UI/TippyStyle';
import { faArrowDown, faArrowUp, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    // const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const dispath = useDispatch();
    const { name, avatar, email } = useSelector((state) => state.login.info);
    const { userName, userEmail } = useSelector((state) => state.login.account);
    const logoutHanler = () => {
        dispath(loginActions.logout());
        navigate('/login');
        // setShowModal(true)
    };

    return (
        <div className=" border-b-2 border-b-neutral-800 shadow-xl px-4 py-2 flex bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">
            <div className="flex gap-2 items-center uppercase font-semibold ">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="logo"
                    className="w-[4%]"
                />

                <p>To Do App - </p>
                <p> Your success starts with self-discipline</p>
            </div>

            <Tippy
                interactive
                delay={[100, 200]}
                placement="bottom"
                render={(attrs) => (
                    <TippyStyles {...attrs} tabIndex="-1">
                        <button className="pb-1 hover:text-yellow-50 font-semibold px-2 " onClick={logoutHanler}>
                            Logout
                            <FontAwesomeIcon icon={faRightFromBracket} className="ml-1" />
                        </button>
                    </TippyStyles>
                )}
            >
                <div className="flex items-center gap-2">
                    <img src={avatar} alt="userAvatar" className="w-[12%] rounded-full" />
                    <div>
                        <p className="text-lg font-medium">{name || userName}</p>
                        <p className="text-sm">{email || userEmail}</p>
                    </div>
                    <p className="text-black pt-6 font-light ">
                        <FontAwesomeIcon icon={faArrowDown} />
                    </p>
                </div>
            </Tippy>
        </div>
    );
};

export default Header;
