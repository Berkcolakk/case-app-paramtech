import { ICard } from '@/interfaces/Card'
import { getDefaultValForTotalPrice } from '@/utils/cart.utils';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    cart: Array<ICard>
    totalPrice: number;
}

const initialState: CounterState = {
    cart: window.localStorage.cart ? JSON.parse(window.localStorage.cart) : [],
    totalPrice: getDefaultValForTotalPrice()
}

export const cartSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<Array<ICard>>) => {
            state.cart = action.payload
            state.totalPrice = getDefaultValForTotalPrice(action.payload);
        },
    },
})

export const { setCart } = cartSlice.actions

export default cartSlice.reducer