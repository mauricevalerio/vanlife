import { Navigate } from "react-router-dom"

export default function RequireAuth() {
    return (
        <Navigate to="/login" />
    )
}