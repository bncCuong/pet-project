import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loginSlice from './actions/login-slice';
import todoSlice from './actions/todo-slice';
import weatherSlice from './actions/weather-slice';

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['login'],
};

const reducer = combineReducers({
    login: loginSlice.reducer,
    addTodo: todoSlice.reducer,
    getWeatherData: weatherSlice.reducer,
});

const persitedReducer = persistReducer(persistConfig, reducer);

// const store = configureStore({
//     reducer: {
//         login: loginSlice.reducer,
//     },
// });
const store = configureStore({
    reducer: persitedReducer,
});

export const persistor = persistStore(store);
export default store;
