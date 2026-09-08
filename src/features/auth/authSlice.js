import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    authStatus : false,
    userData : null,
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state, action) => {
            state.authStatus = true;
            state.userData = action.payload.userData;
        },
        logout : (state) => {
            state.authStatus = false;
            state.userData = null;
        },
    }
})

const {login, logout} = authSlice.actions;

const authReducer = authSlice.reducer

export {login, logout, authReducer}