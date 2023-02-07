import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from '../components/pages/Home';

import store, { persistor } from '../stores/store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

import GlobalStyle from '../components/GlobalStyle/index';
import Login from '../components/pages/Login';
import ProtectedRoute from './ProtectedRoute';
import Error from '../components/pages/Error';
import MyDayPage from '../components/pages/childrenPage/MydayPage/MyDayPage';
import { ImportantPage, CompletedPage, TaskPage } from '../components/pages/childrenPage/index';
import WeatherPage from '../components/pages/childrenPage/WeatherPage';
const ContainerLayout = () => {
    return (
        <GlobalStyle>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Outlet />
                </PersistGate>
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
                        children: [
                            { element: <MyDayPage />, path: '/today' },
                            { element: <ImportantPage />, path: '/important' },
                            { element: <CompletedPage />, path: '/completed' },
                            { element: <TaskPage />, path: '/task' },
                            { element: <WeatherPage />, path: '/weather' },
                        ],
                    },
                ],
            },
        ],
    },
]);
