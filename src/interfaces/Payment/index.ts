export interface IPayment {
    packageIds: number[];
    cardHolderName: string;
    cardNumber: number;
    expireDate: string;
    cvv: string;
    totalAmount: number;
    currency: string;
}