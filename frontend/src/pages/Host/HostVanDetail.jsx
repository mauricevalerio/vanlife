import { Outlet, Link, NavLink, useLoaderData } from 'react-router-dom'

export async function loader(params, getHostVans) {
    return getHostVans(params.id)
}

export default function HostVanDetail() {
    const hostVan = useLoaderData()
    
    return (
        <section className='van-detail'>
            <Link
            to='/host/vans'
            relative='path'
            className='back-button'>
            &larr; <span>Back to all vans</span>
            </Link>

            <div className='host-van-card'>
                <img src={hostVan.imageUrl} className='host-van'/>
                <div className='host-van-card-inner'>
                    <span className={`van-type ${hostVan.type}`}>{hostVan.type}</span>
                    <h2 className='van-name'>{hostVan.name}</h2>
                    <p className='van-price'>
                        <span className='van-price-inner'>${hostVan.price}
                        </span>/day
                    </p>
                </div>
            </div>

            <nav>
                <NavLink
                to='.'
                end
                className={({isActive}) => isActive ? 'active-link' : null}
                >Details
                </NavLink>

                <NavLink
                to='pricing'
                className={({isActive}) => isActive ? 'active-link' : null}
                >Pricing
                </NavLink>
                
                <NavLink
                to='photo'
                className={({isActive}) => isActive ? 'active-link' : null}
                >Photos
                </NavLink>
            </nav>

            <Outlet 
            context={{hostVan}}
            />
        </section>
    )
}