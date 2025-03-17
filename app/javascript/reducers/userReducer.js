import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    current: {}
}

const userSlice = createSlice({
    name: 'demo.user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.current = action.payload
        }
    }
})

export const { setUser } = userSlice.actions
export const userReducer = userSlice.reducer


