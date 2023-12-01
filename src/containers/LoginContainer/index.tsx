import CustomButton from "@/components/Button";
import CustomInput from "@/components/CustomInput";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { IAuthentication } from "@/interfaces/Login";
import { HOME } from "@/router";
import { AuthService } from "@/services/login";
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { Form, message } from "antd";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

const LoginContainer = () => {
    const [user, setUser] = useLocalStorage('user', null)
    const router = useRouter();
    const handleFinish = async (values: IAuthentication) => {
        console.log(values)
        const result = await AuthService(values);
        if (!result.user) {
            message.error(result.message);
            return;
        }
        setUser(result)
        router.push(HOME)
    }
    useEffect(() => {
        if (user) {
            router.push(HOME)
        }
    }, [user])
    return (
        <div className="container">
            <Form layout="vertical" onFinish={handleFinish}
                initialValues={{ email: "", code: "" }}>
                <Form.Item label={"Email Adresiniz"} name="email" rules={[{ required: true, message: 'Lütfen Email Adresinizi giriniz!' }]}>
                    <CustomInput prefix={<MailOutlined />} size="large" />
                </Form.Item>
                <Form.Item label={"Kullanıcı Kodunuz"} name="code" rules={[{ required: true, message: 'Lütfen Kullanıcı Kodunuzu giriniz!' }]}>
                    <CustomInput prefix={<UserOutlined />} size="large" />
                </Form.Item>
                <CustomButton htmlType="submit" className="login-btn" size="large" >Devam Et</CustomButton>
            </Form>
        </div>
    )
}
export default LoginContainer;