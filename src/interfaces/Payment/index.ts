export interface IPayment {
    packageIds?: string[];
    cardHolderName: string;
    cardNumber: number;
    expireDate: string;
    cvv: string;
    totalAmount?: number;
    currency?: string;
}