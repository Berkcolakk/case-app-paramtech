import { IUser } from '@/interfaces/Login'
import { getCookie } from '@/utils/cookie.utils'
import { b64d } from '@/utils/encrpytion.utils'
import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    selectedCardIds: Array<string>
}

const initialState: CounterState = {
    selectedCardIds: JSON.parse(b64d(localStorage.getItem("selectedIds")) ?? "[]")
}

export const cardSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSelectedCardIds: (state, action) => {
            state.selectedCardIds = action.payload
        },
    },
})

export const { setSelectedCardIds } = cardSlice.actions

export default cardSlice.reducer