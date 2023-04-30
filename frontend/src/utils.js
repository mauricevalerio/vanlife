import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const pathName = new URL(request.url).pathname
    let isLoggedIn = true
    if (!isLoggedIn) {
        throw redirect(`/login?message=Please login first to access this tab&redirectTo=${pathName}`)

    }
    return null
}