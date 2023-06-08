import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_API_KEY;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getMovieByName: builder.query({
      query: (query, page = 1) =>
        `search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=${page}`,
    }),
  }),
});

export const { useGetMovieByNameQuery } = movieApi;
