import { headers } from "next/headers";

export async function getBaseUrl() {
    const headersList = await headers();

    const host =
        headersList.get("x-forwarded-host") ??
        headersList.get("host");

    if (!host) {
        throw new Error("Unable to determine application host");
    }

    const protocol =
        headersList.get("x-forwarded-proto") ??
        (process.env.NODE_ENV === "development" ? "http" : "https");

    return `${protocol}://${host}`;
}