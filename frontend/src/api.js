export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : '/api/vans'
    try {
        const response = await fetch(url)
        const data = await response.json()
        if (!response.ok) throw data

        return data

    } catch (e) {
        throw {
            message: e.message
        }
    }

}

