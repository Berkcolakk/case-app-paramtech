import { HOST } from "@/config"
//REAL API
export const Authentication = `${HOST}/api/auth/sign-in`
export const Packages = `${HOST}/api/packages`
export const Payment = `${HOST}/api/payment`
//LOCAL
export const PaymentAgreementLocal = "/api/paymentAgreement"
export const PaymentLocal = "/api/payment"
export const PackagesLocal = "/api/package";
export const AuthenticationLocal = "/api/auth"