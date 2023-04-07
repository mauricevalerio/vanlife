export function getVans(id) {
    const url = id ? `/api/vans/${id}` : '/api/vans'

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw {
                    defaultMessage: 'Failed to load vans data',
                    text: response.statusText,
                    status: response.status
                }
            }
            return response.json()
        })
        .then(data => data.vans)
}

