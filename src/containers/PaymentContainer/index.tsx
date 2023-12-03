import DoubleWrapper from "@/components/DoubleWrapper";
import PaymentCardInfo from "../PaymentCreditCardInfo";
import CartContainer from "../CartContainer";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { HOME } from "@/router";
const PaymentContainer = () => {
    const cart = useSelector((state: RootState) => state.card.cart);
    const router = useRouter();

    useEffect(() => {
        if (cart.length === 0) {
            router.push(HOME)
        }
    }, [cart, router])

    return (
        <>
            <DoubleWrapper
                mainContainer={
                    <PaymentCardInfo />
                }
                SecondryContainer={
                    <CartContainer />
                }
            />
        </>
    )
}
export default PaymentContainer;