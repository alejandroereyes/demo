import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rootApi } from "./rootApi";

const store = configureStore({
    reducer: {
        [rootApi.reducerPath]: rootApi.reducer
    },
    middleware: (getDefaultMiddleWare) => (
        getDefaultMiddleWare().concat([rootApi.middleware])
    )
})

setupListeners(store.dispatch)

export default store
