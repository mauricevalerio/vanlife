import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'

export async function loader({request}) {
    await requireAuth(request)
    return getHostVans()
}

export default function HostVans() {
    const hostVanList = useLoaderData()
    
    const hostVanElements = hostVanList.map(hostVan => {
        return <Link
        to={hostVan._id}
        key={hostVan._id}>
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
            <div className='host-van-list-inner'>
                {hostVanElements}
            </div>
        </section>
    )
}