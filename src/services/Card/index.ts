import { PackagesLocal } from "@/constants/Endpoints/Login";
import fetcher from "../fetcher";

export const GetAllPackages = async () => {
    return (await fetcher(PackagesLocal, {})).json();
}