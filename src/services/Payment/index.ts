import { PaymentAgreementLocal, PaymentLocal } from "@/constants/Endpoints/Login";
import fetcher from "../fetcher";
import { IPayment } from "@/interfaces/Payment";

export const GetPaymentAgreement = async () => {
    return (await fetcher(PaymentAgreementLocal, {})).json();
}
export const SendPaymentInformation = async (data: IPayment) => {
    return (await fetcher(PaymentLocal, { body: JSON.stringify(data),method:"POST" }));
}