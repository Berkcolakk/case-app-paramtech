import { IPayment } from "@/interfaces/Payment";
import { Form, Space } from "antd";
import CustomInput from "../CustomInput";
import { setCardHolderName, setCardNumber, setCvv, setExpireDate } from "@/store/slices/CreditCardSlice";
import { useDispatch } from "react-redux";

const CreditCard = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Kart Bilgileri</h3>
            <Form layout="vertical"
                style={{ width: "400px" }}
            >
                <Form.Item label={"Kart Üzerindeki İsim Soyisim"} name="cardHolderName">
                    <CustomInput size="large" onChange={(e) => dispatch(setCardHolderName(e.currentTarget.value))} />
                </Form.Item>
                <div style={{ display: "flex" }}>
                    <Space>
                        <Form.Item label={"Kart Numarası"} name="cardNumber" rules={[{ required: true, message: 'Lütfen Kart Numarası giriniz!' }]}>
                            <CustomInput size="large" onChange={(e) => dispatch(setCardNumber(Number(e.currentTarget.value)))} />
                        </Form.Item>
                        <Form.Item label={"Son Kul. Tar."} name="expireDate" rules={[{ required: true, message: 'Lütfen Son Kullanma Tarihi giriniz!' }]}>
                            <CustomInput size="large" onChange={(e) => dispatch(setExpireDate(e.currentTarget.value))} />
                        </Form.Item>
                        <Form.Item label={"CVV/CVC"} name="cvv" rules={[{ required: true, message: 'Lütfen CVV giriniz!' }]}>
                            <CustomInput size="large" onChange={(e) => dispatch(setCvv(e.currentTarget.value))} />
                        </Form.Item>
                    </Space>
                </div>
            </Form>
        </div>
    )
}
export default CreditCard;