import { IPayment } from "@/interfaces/Payment";
import { Form, Space } from "antd";
import CustomInput from "../CustomInput";

const CreditCard = () => {
    const handleFinish = async (values: IPayment) => {
    }
    return (
        <div>
            <h3>Kart Bilgileri</h3>
            <Form layout="vertical" onFinish={handleFinish}
                initialValues={{ email: "", code: "" }}
                style={{ width: "400px" }}
            >
                <Form.Item label={"Kart Üzerindeki İsim Soyisim"} name="cardHolderName" rules={[{ required: true, message: 'Lütfen İsim Soyisim giriniz!' }]}>
                    <CustomInput size="large" />
                </Form.Item>
                <div style={{ display: "flex" }}>
                    <Space>
                        <Form.Item label={"Kart Numarası"} name="cardNumber" rules={[{ required: true, message: 'Lütfen Kart Numarası giriniz!' }]}>
                            <CustomInput size="large" />
                        </Form.Item>
                        <Form.Item label={"Son Kul. Tar."} name="expireDate" rules={[{ required: true, message: 'Lütfen Son Kullanma Tarihi giriniz!' }]}>
                            <CustomInput size="large" />
                        </Form.Item>
                        <Form.Item label={"CVV/CVC"} name="cvv" rules={[{ required: true, message: 'Lütfen CVV giriniz!' }]}>
                            <CustomInput size="large" />
                        </Form.Item>
                    </Space>
                </div>
            </Form>
        </div>
    )
}
export default CreditCard;