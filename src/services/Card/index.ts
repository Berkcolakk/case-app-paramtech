import fetcher from "../fetcher";

export const GetAllPackages = async () => {
    return (await fetcher(`/api/package`, {})).json();
}