"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetCurrentForecastQuery = exports.weatherCoreApi = void 0;

var _react = require("@reduxjs/toolkit/query/react");

var KEY_API = 'ebc3cb54174444b3a01121613230902';
var weatherCoreApi = (0, _react.createApi)({
  reducerPath: 'weatherCoreApi',
  baseQuery: (0, _react.fetchBaseQuery)({
    baseUrl: 'http://api.weatherapi.com/v1',
    prepareHeaders: function prepareHeaders(headers) {
      headers.set('Weather-Api', 'ebc3cb54174444b3a01121613230902');
      return headers;
    }
  }),
  endpoints: function endpoints(builder) {
    return {
      getCurrentForecast: builder.query({
        query: function query(location) {
          return "/forecast.json?key=".concat(KEY_API, "&q=").concat(location, "&days=1");
        }
      })
    };
  }
});
exports.weatherCoreApi = weatherCoreApi;
var useGetCurrentForecastQuery = weatherCoreApi.useGetCurrentForecastQuery;
exports.useGetCurrentForecastQuery = useGetCurrentForecastQuery;