import { Authentication } from "@/constants/Endpoints/Login"
import { IAuthentication } from "@/interfaces/Login"

export const AuthService = async (data: IAuthentication) => {
    return (await fetch(Authentication, { body: JSON.stringify(data), method: "POST" })).json();
}