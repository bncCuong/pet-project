import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './actions/login-slice';
const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
    },
});

export default store;
