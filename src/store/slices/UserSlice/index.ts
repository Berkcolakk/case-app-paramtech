import { IUser } from '@/interfaces/Login'
import { getCookie } from '@/utils/cookie.utils'
import { b64d } from '@/utils/encrpytion.utils'
import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    token: string | null;
    email: string | null;
}

const initialState: CounterState = {
    token: getCookie("token"),
    email: b64d(localStorage.email)
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