import { ICard } from "@/interfaces/Card";

export const getDefaultValForTotalPrice = (cart?: Array<ICard>) => {
    let data = cart;
    if (!cart) {
        data = window.localStorage.cart ? JSON.parse(window.localStorage.cart) : []
    }
    let total = 0;
    data?.forEach((item) => {
        total += item.price
    })
    return total;
}