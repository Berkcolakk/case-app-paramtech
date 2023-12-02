export const getCookie = (cookieName: string): string | null => {
    if (typeof document === "undefined") return null;
    const name = `${cookieName}=`;

    const decodedCookie = decodeURIComponent(document?.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
};

export const setCookie = (name: string, value: string) => {
    var expires = "";
    var now = new Date();
    now.setTime(now.getTime() + 1 * 3600 * 1000);
    expires = "; expires=" + now.toLocaleString("tr-TR");
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

export const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}