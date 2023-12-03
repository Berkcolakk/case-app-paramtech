import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface CounterState {
}

const initialState: CounterState = {
}

export const cartSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
})

export const { } = cartSlice.actions

export default cartSlice.reducer