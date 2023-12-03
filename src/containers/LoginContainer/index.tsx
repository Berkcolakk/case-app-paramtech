import CustomButton from "@/components/Button";
import CustomInput from "@/components/CustomInput";
import Wrapper from "@/components/Wrapper";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { IAuthentication } from "@/interfaces/Login";
import { HOME } from "@/router";
import { AuthService } from "@/services/Login";
import { setEmail, setToken } from "@/store/slices/UserSlice";
import { setCookie } from "@/utils/cookie.utils";
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { Form, message } from "antd";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const LoginContainer = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useLocalStorage('email', undefined)
    const router = useRouter();
    const handleFinish = async (values: IAuthentication) => {
        const result = await AuthService(values);
        if (!result.user) {
            message.error(result.message);
            return;
        }
        setUser(result.user.email)
        dispatch(setToken(result.token))
        dispatch(setEmail(result.user.email))
        setCookie("token", result.token)
        router.push(HOME)
    }
    
    return (
        <Wrapper>
            <Form layout="vertical" onFinish={handleFinish}
                initialValues={{ email: "", code: "" }}
                style={{ width: "400px" }}
            >
                <Form.Item label={"Email Adresiniz"} name="email" rules={[{ required: true, message: 'Lütfen Email Adresinizi giriniz!' }]}>
                    <CustomInput prefix={<MailOutlined />} size="large" />
                </Form.Item>
                <Form.Item label={"Kullanıcı Kodunuz"} name="code" rules={[{ required: true, message: 'Lütfen Kullanıcı Kodunuzu giriniz!' }]}>
                    <CustomInput prefix={<UserOutlined />} size="large" />
                </Form.Item>
                <CustomButton htmlType="submit" className="login-btn" size="large" >Devam Et</CustomButton>
            </Form>
        </Wrapper>
    )
}
export default LoginContainer;