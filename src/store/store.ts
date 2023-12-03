import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import cartSlice from "./slices/CartSlice";
import creditCardSlice from "./slices/CreditCardSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        cart: cartSlice,
        creditCard: creditCardSlice
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;