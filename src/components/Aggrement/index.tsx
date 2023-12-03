import { GetPaymentAgreement } from "@/services/Payment";
import { TPaymentAggrement } from "@/types/Payment";
import Paragraph from "antd/es/typography/Paragraph";
import { useQuery } from "react-query";

const Agreement = () => {
    const { data, isLoading } = useQuery<TPaymentAggrement>('paymentAggrement', GetPaymentAgreement)
    return (
        <div>
            <h3>Sözleşme</h3>
            <Paragraph>
                <pre><span dangerouslySetInnerHTML={{ __html: decodeURIComponent(data?.content ?? "") }} /></pre>
            </Paragraph>
        </div>
    )
}
export default Agreement;