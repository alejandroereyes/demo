import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rootApi = createApi({
    reducerPath: 'user',
    tagTypes: ['CURRENT_USER'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api',
        prepareHeaders: (headers) => {
            const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
            if (csrfToken) {
                headers.set('X-CSRF-Token', csrfToken)
            }
        }
    }),
    endpoints: (build) => ({
        fetchCurrentUser: build.query({
            query: () => '/users',
            providesTags: ['CURRENT_USER']
        })
    })
})

export const { useFetchCurrentUserQuery } = rootApi
