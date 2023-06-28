import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false
    },
    reducers: {
        loginOperation: (state) => {
            state.isLogin = true;
        },
        logoutOperation: (state) => {
            state.isLogin = false;
        }
    }
})

export const { loginOperation, logoutOperation } = userSlice.actions;
export default userSlice.reducers;