import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    authStatus : localStorage.getItem("authStatus") === "true",
    userData : JSON.parse(localStorage.getItem("userData")) || null,
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state, action) => {
            state.authStatus = true;
            state.userData = action.payload.userData;
            console.log("logged in");
            
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