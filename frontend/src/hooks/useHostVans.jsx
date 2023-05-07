import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


export default function useHostVans() {
    const { user } = useContext(AuthContext)
    
    //GET - /api/host/vans & /api/host/vans/:id
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
            throw {
                defaultMessage: 'Failed to load host vans data',
                text: error.statusText,
                status: error.status
            }
        }
    }

    // POST - /api/host/vans
    async function postHostVans(hostVanData) {
        if (!user) return 

        try {
            const response = await fetch('/api/host/vans', {
                method: "POST",
                body: JSON.stringify(hostVanData),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.token}`
                }
            })
            const data = await response.json()
            if (!response.ok) throw data

            return data
        } catch (error) {
            throw {
                message: error.message
            }
        }
    }

    return { getHostVans, postHostVans }
}
