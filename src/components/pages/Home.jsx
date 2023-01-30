import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../stores/store/actions/login-slice';
const Home = (props) => {
    const navigate = useNavigate();
    const dispath = useDispatch();

    const logoutHanler = () => {
        dispath(loginActions.logout());
        navigate('/login');
    };
    return (
        <div>
            Home Page
            <button onClick={logoutHanler}>logout</button>
        </div>
    );
};

export default Home;
