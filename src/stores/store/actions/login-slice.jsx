import { createSlice } from '@reduxjs/toolkit';
const loginSlice = createSlice({
    name: 'user',
    initialState: {
        info: [],
        saveToLocalStore: null,
    },
    reducers: {
        getInfoUser(state, action) {
            const infoUser = action.payload;
            if (infoUser.accessToken) {
                state.info.push({
                    name: infoUser.displayName,
                    avatar: infoUser.photoURL,
                    email: infoUser.email,
                    accessToken: infoUser.accessToken,
                    uid: infoUser.uid,
                });
                state.saveToLocalStore = localStorage.setItem('uid', infoUser.uid);
            }
        },
        logout(state) {
            state.info = [];
            state.saveToLocalStore = localStorage.clear();
        },
    },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
