import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import cardSlice from "./slices/CartSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        card: cardSlice
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;