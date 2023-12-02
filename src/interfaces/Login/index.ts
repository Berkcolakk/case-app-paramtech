export interface IAuthentication {
    email: string;
    code: string;
}
export interface IUser {
    message: string;
    token: string;
    user: {
        code: string;
        createdAt: string;
        email: string;
        expireDate: string;
        role: string;
        updatedAt: string;
        __v: number;
        _id: string;
    }
}