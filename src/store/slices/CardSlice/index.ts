import { ICard } from '@/interfaces/Card'
import { b64d } from '@/utils/encrpytion.utils'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    cart: Array<ICard>
    totalPrice: number;
}

const initialState: CounterState = {
    cart: JSON.parse(b64d(localStorage.getItem("cart")) ?? "[]"),
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<Array<ICard>>) => {
            state.cart = action.payload
            let total = 0;
            action.payload.forEach((item) => {
                total += item.price
            })
            state.totalPrice = total;
        },
    },
})

export const { setCart } = cartSlice.actions

export default cartSlice.reducer