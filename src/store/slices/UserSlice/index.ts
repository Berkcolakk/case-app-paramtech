import { IUser } from '@/interfaces/Login'
import { b64d } from '@/utils/encrpytion.utils'
import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    user: IUser | null
}

const initialState: CounterState = {
    user: localStorage.getItem("user") ? JSON.parse(b64d(localStorage.getItem("user")) ?? "") : null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer