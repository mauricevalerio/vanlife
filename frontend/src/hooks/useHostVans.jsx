import { useContext } from "react"
import { AuthContext } from "../context/authContext"


export default function useHostVans() {
    const { user } = useContext(AuthContext)
    
    async function getHostVans(id) {
        const url = id ? `/api/host/vans/${id}` : '/api/host/vans'

        if (!user) return 

        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })
            const data = await response.json()
            
            return data
        } catch (error) {
            console.log(error)
            throw {
                defaultMessage: 'Failed to load host vans data',
                text: error.statusText,
                status: error.status
            }
        }
    }

    return { getHostVans }
}
