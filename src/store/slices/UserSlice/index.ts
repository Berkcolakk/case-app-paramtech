import { IUser } from '@/interfaces/Login'
import { getCookie } from '@/utils/cookie.utils'
import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    token: string | null;
    email?: string | null;
}

const initialState: CounterState = {
    token: getCookie("token"),
    email: localStorage.email?.replace(/['"]+/g, '')
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setEmail : (state, action) => {
            state.email = action.payload
        },
    },
})

export const { setToken,setEmail } = userSlice.actions

export default userSlice.reducer