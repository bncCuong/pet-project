import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from '../components/pages/Home';

import store from '../stores/store/store';
import GlobalStyle from '../components/GlobalStyle/index';
import Login from '../components/pages/Login';
import ProtectedRoute from './ProtectedRoute';
import Error from '../components/pages/Error';
const ContainerLayout = () => {
    return (
        <GlobalStyle>
            <Provider store={store}>
                <Outlet />
            </Provider>
        </GlobalStyle>
    );
};
export default createBrowserRouter([
    {
        element: <ContainerLayout />,
        errorElement: <Error />,
        children: [
            {
                element: <Login />,
                path: '/login',
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        element: <Home />,
                        path: '/',
                    },
                ],
            },
        ],
    },
]);