import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        infoCity: {},
    },
    reducers: {
        addWeatherData(state, action) {
            state.infoCity = action.payload;
        },
    },
});

export const weatherActions = weatherSlice.actions;
export default weatherSlice;
