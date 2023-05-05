import { Link, useLoaderData } from 'react-router-dom'

export async function loader(request, getHostVans) {
    return getHostVans()
}

export default function HostVans() {
    const hostVanList = useLoaderData()
    
    const hostVanElements = hostVanList.map(hostVan => 
        <Link
        to={hostVan._id}
        key={hostVan._id}>
            <div className='host-van-card'>
                <img src={hostVan.imageUrl} alt={`Host Van Image of ${hostVan.name}`} className='host-van' />
                <div className='host-van-card-inner'>
                    <h3 className='host-van-name'>{hostVan.name}</h3>
                    <p className='host-van-price'>
                        ${hostVan.price}
                        <span className='host-van-price-inner'>/day</span>
                    </p>
                </div>
            </div>
        </Link>
    )

    return (
        <section className='host-vans'>
            <div className='host-vans-inner'>
                {hostVanElements}
            </div>
        </section>
    )
}