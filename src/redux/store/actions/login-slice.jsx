import { createSlice } from '@reduxjs/toolkit';
const loginSlice = createSlice({
    name: 'user',
    initialState: {
        account: [
            {
                userName: 'bncCuong',
                userPassword: '123456',
            },
        ],
        info: {},
        saveToLocalStore: null,
    },
    reducers: {
        getInfoUser(state, action) {
            const infoUser = action.payload;
            if (infoUser.accessToken) {
                state.info = {
                    name: infoUser.displayName,
                    avatar: infoUser.photoURL,
                    email: infoUser.email,
                    accessToken: infoUser.accessToken,
                    uid: infoUser.uid,
                };
                state.saveToLocalStore = localStorage.setItem('uid', infoUser.uid);
            }
        },
        createNewUser(state, action) {
            const newUser = action.payload;
            state.account = {
                userName: newUser.userName,
                userID: newUser.id,
                userEmail: newUser.userEmail,
                userPassword: newUser.userPassword,
            };
            state.saveToLocalStore = localStorage.setItem('newUser', newUser.userName);
        },
        logout(state) {
            state.info = {};
            state.saveToLocalStore = localStorage.clear();
        },
    },
});

export const loginActions = loginSlice.actions;
export default loginSlice;
