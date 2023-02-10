import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { weatherCoreApi } from '../services/weather-services';
import { musicCoreApi } from '../services/music-services';
import loginSlice from './actions/login-slice';
import todoSlice from './actions/todo-slice';

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['addTodo'],
};

const reducer = combineReducers({
    login: loginSlice.reducer,
    addTodo: todoSlice.reducer,
    [weatherCoreApi.reducerPath]: weatherCoreApi.reducer,
    [musicCoreApi.reducerPath]: musicCoreApi.reducer,
});

const persitedReducer = persistReducer(persistConfig, reducer);

// const store = configureStore({
//     reducer: {
//         login: loginSlice.reducer,
//     },
// });
const store = configureStore({
    reducer: persitedReducer,
    middleware: (getDefaultMiddleware) => {
        return (
            getDefaultMiddleware().concat(weatherCoreApi.middleware),
            getDefaultMiddleware().concat(musicCoreApi.middleware)
        );
    },
});

export const persistor = persistStore(store);
export default store;
