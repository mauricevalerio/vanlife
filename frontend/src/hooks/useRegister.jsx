import { AuthContext } from "../context/authContext"
import { useContext } from "react"

export default function useRegister() {
    const { dispatch } = useContext(AuthContext)

    async function register(hostData) {
        const fetchOption = {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(hostData)
        }

        try {
            const response = await fetch("/api/host/register", fetchOption)
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
   return { register }
}