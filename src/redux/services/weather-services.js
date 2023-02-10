import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const KEY_API = 'ebc3cb54174444b3a01121613230902';
export const weatherCoreApi = createApi({
    reducerPath: 'weatherCoreApii',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://api.weatherapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('Weather-Api', 'ebc3cb54174444b3a01121613230902');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getCurrentForecast: builder.query({
            query: (location) => `/forecast.json?key=${KEY_API}&q=${location}&days=1`,
        }),
    }),
});

export const { useGetCurrentForecastQuery } = weatherCoreApi;
