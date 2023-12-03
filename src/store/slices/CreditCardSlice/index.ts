import { IPayment } from '@/interfaces/Payment'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    cardHolderName: string;
    cardNumber: number;
    expireDate: string;
    cvv: string;
}

const initialState: CounterState = {
    cardHolderName: "",
    cardNumber: 0,
    cvv: "",
    expireDate: "",
}

export const creditCardSlice = createSlice({
    name: 'creditCard',
    initialState,
    reducers: {
        setCardHolderName: (state, action: PayloadAction<string>) => {
            state.cardHolderName = action.payload
        },
        setCardNumber: (state, action: PayloadAction<number>) => {
            state.cardNumber = action.payload
        },
        setCvv: (state, action: PayloadAction<string>) => {
            state.cvv = action.payload
        },
        setExpireDate: (state, action: PayloadAction<string>) => {
            state.expireDate = action.payload
        },
    },
})

export const { setCardHolderName, setCardNumber, setCvv, setExpireDate } = creditCardSlice.actions

export default creditCardSlice.reducer