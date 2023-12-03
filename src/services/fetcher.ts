import { getCookie } from "@/utils/cookie.utils";


function updateOptions(url: string, options: RequestInit) {
    const update = { ...options };
    const token = getCookie("token")
    if (token && url.indexOf("auth/sign-in") === -1) {
        const header = new Headers({
            "Authorization": `Bearer ${token}`
        })
        update.headers = header
    }
    return update;
}

export default function fetcher(url: string, options: RequestInit) {
    return fetch(url, { ...updateOptions(url, options) });
}