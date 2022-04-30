import { createSlice } from '@reduxjs/toolkit';

// store user information 
export const userSlice = createSlice({
    name: "user", 

    // state.user.user == null
    initialState:{user: null},
        
    reducers: {
        login: (state, action)=>{
            state.user= action.payload;
        },

        logout:(state)=>{
            state.user=null;
        },
    },
})

export default userSlice.reducer; // create the reducer
export const { login, logout } = userSlice.actions; // actions and constants
export const selectUser = (state) => state.user.user