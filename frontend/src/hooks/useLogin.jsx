import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function useLogin() {
    const { dispatch } = useContext(AuthContext)

    async function login(credentials) {
        const fetchOption = {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(credentials)
        }
    
        try {
            const response = await fetch("/api/host/login", fetchOption)
            const data = await response.json()
            if (!response.ok) throw data
 
            localStorage.setItem("user", JSON.stringify(data))
            dispatch({type: "LOGIN", payload: data})
    
        } catch (e) {
            throw {
                message: e.message
            }
        }
    }

    return { login }
}