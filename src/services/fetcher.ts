import { getCookie } from "@/utils/cookie.utils";


function updateOptions(options: RequestInit) {
    const update = { ...options };
    const token = getCookie("token")
    if (token) {
        const header = new Headers({
            "Authorization": `Bearer ${token}`
        })
        update.headers = header
    }
    return update;
}

export default function fetcher(url: string, options: RequestInit) {
    debugger
    return fetch(url, { ...updateOptions(options) });
}