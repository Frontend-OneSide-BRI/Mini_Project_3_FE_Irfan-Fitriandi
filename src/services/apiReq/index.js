import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_API_KEY;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getMovieByName: builder.query({
      query: (query) =>
        `search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`,
    }),
    getDetailMovie: builder.query({
      query: (id) => `/movie/${id}?api_key=${API_KEY}`,
    }),
    getMovieByGenre: builder.query({
      query: (args) => {
        const { genres, pages } = args;
        return {
          url: `discover/movie?api_key=${API_KEY}&with_genres=${genres}&page=${pages}`,
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        if (newItems.page === 1) {
          currentCache.results.splice(...newItems.results);
        }
        currentCache.results.push(...newItems.results);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getMovieByNowPlaying: builder.query({
      query: (page = 1) =>
        `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`,
    }),
    getReqToken: builder.query({
      query: () => `authentication/token/new?api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetMovieByNameQuery,
  useGetDetailMovieQuery,
  useGetMovieByGenreQuery,
  useGetMovieByNowPlayingQuery,
  useGetReqTokenQuery,
} = movieApi;
