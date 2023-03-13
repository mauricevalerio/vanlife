import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HostVans() {

    const [hostVanList, setHostVanList] = useState([])

    useEffect(() => {
        axios.get('/api/host/vans')
            .then(response => setHostVanList(response.data.vans))
    },[])

    const hostVanElements = hostVanList.map(hostVan => {
        return <Link
        to={hostVan.id}
        key={hostVan.id}>
            <div className='host-van-card'>
                <img src={hostVan.imageUrl} alt={`Host Van Image of ${hostVan.name}`} className='host-van' />
                <div className='host-van-card-inner'>
                    <h2 className='van-name'>{hostVan.name}</h2>
                    <p className='van-price'>
                        <span className='van-price-inner'>${hostVan.price}
                        </span>/day
                    </p>
                </div>
            </div>
        </Link>
    })

    return (
        <section className='host-van-list'>
            <h1>Your listed vans</h1>
            {hostVanList.length > 0 ? 
                <div className='host-van-list-inner'>
                    {hostVanElements}
                </div>
            :
                <h2>Loading...</h2>
            }
        </section>
    )
}