import { Link, useLoaderData, redirect } from 'react-router-dom'

export async function loader(user, getHostVans) {
    if (!user) return redirect("/login?message=You must login first")
    return await getHostVans()
}

export default function HostVans() {
    const hostVanList = useLoaderData()
    
    const hostVanElements = hostVanList.map(hostVan => 
        <Link
        to={`vans/${hostVan._id}`}
        key={hostVan._id}>
            <div className='host-van-card'>
                <img src={hostVan.imageUrl} alt={`Host Van Image of ${hostVan.name}`} className='host-van' />
                
                <div className='host-van-card-inner'>
                    <h3 className='host-van-name'>{hostVan.name}</h3>
                    <span className='host-van-price'>
                        ${hostVan.price}
                        <span className='day-text'>/day</span>
                    </span>
                </div>
            </div>
        </Link>
    )

    return (
        <div className='host-van-cards-container'>
            {hostVanElements}
        </div>
    )
}