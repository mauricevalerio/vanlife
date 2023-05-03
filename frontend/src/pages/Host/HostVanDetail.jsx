import { Outlet, Link, NavLink, useLoaderData } from 'react-router-dom'

export async function loader(params, getHostVans) {
    return getHostVans(params.id)
}

export default function HostVanDetail() {
    const style = {
        color: '#161616',
        textDecoration: 'underline',
        fontWeight: '600'
    }

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

            <nav className='host-van-detail-nav'>
                <NavLink
                to='.'
                end
                style={({isActive}) => isActive ? style : null}
                >Details
                </NavLink>

                <NavLink
                to='pricing'
                style={({isActive}) => isActive ? style : null}
                >Pricing
                </NavLink>
                
                <NavLink
                to='photo'
                style={({isActive}) => isActive ? style : null}
                >Photos
                </NavLink>
            </nav>

            <Outlet 
            context={{hostVan}}
            />
        </section>
    )
}