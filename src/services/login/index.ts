import { Authentication } from "@/constants/Endpoints/Login"
import { IAuthentication } from "@/interfaces/Login"
import fetcher from "../fetcher";

export const AuthService = async (data: IAuthentication) => {
    return (await fetcher(Authentication, { body: JSON.stringify(data), method: "POST" })).json();
}