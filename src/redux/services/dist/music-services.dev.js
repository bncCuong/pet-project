'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.useGetMusicDataQuery = exports.musicCoreApi = void 0;

var _react = require('@reduxjs/toolkit/query/react');

var musicCoreApi = (0, _react.createApi)({
    reducerPath: 'musicCoreApi',
    baseQuery: (0, _react.fetchBaseQuery)({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: function prepareHeaders(headers) {
            headers.set('X-RapidAPI-Key', '3f9510a9c4msh152986455a804ebp14a0b2jsn59b3331973e2');
            return headers;
        },
    }),
    endpoints: function endpoints(builder) {
        return {
            getMusicData: builder.query({
                query: function query() {
                    return '/charts/country?country_code=VN';
                },
            }),
        };
    },
});
exports.musicCoreApi = musicCoreApi;
var useGetMusicDataQuery = musicCoreApi.useGetMusicDataQuery;
exports.useGetMusicDataQuery = useGetMusicDataQuery;
