export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : '/api/vans'
    try {
        const response = await fetch(url)
        const data = await response.json()
        if (!response.ok) {
            throw data
        }
        return data

    } catch (e) {
        throw {
            message: e.message
        }
    }

}


export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : '/api/host/vans'
    try {
        const response = await fetch(url)
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

export async function loginUser(credentials) {
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
        if (!response.ok) {
            throw data
        } else {
            localStorage.setItem("user", JSON.stringify(data))
            return data
        }

    } catch (e) {
        throw {
            message: e.message
        }
    }
}

export async function registerUser(hostData) {
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

        return data
    } catch (e) {
        throw {
            message: e.message
        }
    }
}