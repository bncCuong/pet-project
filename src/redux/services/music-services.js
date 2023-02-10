import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const musicCoreApi = createApi({
    reducerPath: 'musicCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '3f9510a9c4msh152986455a804ebp14a0b2jsn59b3331973e2');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getMusicData: builder.query({
            query: () => `/charts/country?country_code=VN`,
        }),
    }),
});

export const { useGetMusicDataQuery } = musicCoreApi;
