import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        credentials:{
            token:""
        },
        dataUser:{
            name:"",
            role:""
        }
    },
    reducers:{
        login: (state, action) => {
            let { payload } = action;
            state.credentials = {
                token: payload.token
            };
            state.dataUser = {
                name: payload.name,
                role: payload.role
            };
        },
        logout: (state) => {
            return {
                ...state,
                credentials: {
                    token: ""
                },
                dataUser: {
                    name:"",
                    role:""
                }
            };
        }
    }
});

export const userData = (state) => state.user;
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;