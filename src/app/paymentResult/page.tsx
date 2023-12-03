import { HOME } from "@/router"
import { Result } from "antd"
import Link from "next/link"

const PaymentResult = () => {
    return (
        <Result
            status="success"
            title="Ödemeniz başarıyla gerçekleşmiştir."
            extra={[
                <Link href={HOME} key="goBack">Geri Dön</Link>,
            ]}
        />
    )
}
export default PaymentResult;