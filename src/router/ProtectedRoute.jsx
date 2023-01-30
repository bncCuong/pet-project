import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('uid')) {
            navigate('/login');
            return;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localStorage]);

    return <Outlet />;
};
export default ProtectedRoute;
