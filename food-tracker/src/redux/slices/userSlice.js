import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        username: 'Guest',
        email: null,
        password: null
    },
    reducers: {
        loginOperation: (state, action) => {
            state.isLogin = true;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        logoutOperation: (state) => {
            state.isLogin = false;
            state.username = 'Guest',
            state.email = null;
            state.password = null;
        }
    }
})

export const { loginOperation, logoutOperation } = userSlice.actions;
export default userSlice.reducer;