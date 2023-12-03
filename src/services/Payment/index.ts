import { PaymentAgreementLocal } from "@/constants/Endpoints/Login";
import fetcher from "../fetcher";

export const GetPaymentAgreement = async () => {
    return (await fetcher(PaymentAgreementLocal, {})).json();
}