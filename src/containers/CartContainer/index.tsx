import CustomButton from "@/components/Button"
import { IPayment } from "@/interfaces/Payment";
import { PAYMENT_RESULT } from "@/router";
import { SendPaymentInformation } from "@/services/Payment";
import { RootState } from "@/store/store";
import { List, Space, Typography, message } from "antd"
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const CartContainer = () => {
    const { cart, totalPrice } = useSelector((state: RootState) => state.cart);
    const { cardHolderName, cardNumber, cvv, expireDate } = useSelector((state: RootState) => state.creditCard);
    const router = useRouter();

    const paymentHandle = async () => {
        const ids = [] as string[]
        let currency = "";
        cart.forEach((item) => {
            ids.push(item._id)
            currency = item.currency;
        })
        const obj = {
            cardHolderName: cardHolderName,
            cardNumber: cardNumber,
            cvv: cvv,
            expireDate: expireDate,
            packageIds: ids,
            currency: currency,
            totalAmount: totalPrice
        } as IPayment;
        const result = await SendPaymentInformation(obj);
        if (result.status !== 201) {
            message.error("Ödeme bilgileriniz hatalıdır. Lütfen tekrar deneyiniz.")
            return;
        }
        router.push(PAYMENT_RESULT)
        console.log(JSON.stringify(obj))
    }
    return (
        <div style={{ width: "400px" }} >
            <List
                header={<div>Sepetteki Paketler</div>}
                footer={<CustomButton onClick={paymentHandle}>Ödeme Yap</CustomButton>}
                bordered
                dataSource={cart}
                renderItem={(item) => (
                    <List.Item style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#F2F2F2" }}>
                        <Typography.Text >{item.name}</Typography.Text><b> {item.price} {item.currency}</b>
                    </List.Item>
                )}
            />
        </div>
    )
}
export default CartContainer