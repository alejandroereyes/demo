import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rootApi = createApi({
    reducerPath: 'user',
    tagTypes: ['CURRENT_USER'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: (build) => ({
        fetchCurrentUser: build.query({
            query: () => '/users',
            providesTags: ['CURRENT_USER']
        })
    })
})

export const { useFetchCurrentUserQuery } = rootApi
