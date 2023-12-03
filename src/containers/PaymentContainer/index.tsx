import DoubleWrapper from "@/components/DoubleWrapper";
import PaymentCardInfo from "../PaymentCardInfo";
import CartContainer from "../CartContainer";

const PaymentContainer = () => {
    return (
        <>
            <DoubleWrapper
                SecondryContainer={
                    <CartContainer />
                }
                mainContainer={
                    <PaymentCardInfo />
                }
            />
        </>
    )
}
export default PaymentContainer;