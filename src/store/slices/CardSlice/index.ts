import { ICard } from '@/interfaces/Card'
import { b64d } from '@/utils/encrpytion.utils'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    selectedCards: Array<ICard>
    totalPrice: number;
}

const initialState: CounterState = {
    selectedCards: JSON.parse(b64d(localStorage.getItem("selectedCards")) ?? "[]"),
    totalPrice: 0
}

export const cardSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSelectedCards: (state, action: PayloadAction<Array<ICard>>) => {
            state.selectedCards = action.payload
            let total = 0;
            action.payload.forEach((item) => {
                total += item.price
            })
            state.totalPrice = total;
        },
    },
})

export const { setSelectedCards } = cardSlice.actions

export default cardSlice.reducer