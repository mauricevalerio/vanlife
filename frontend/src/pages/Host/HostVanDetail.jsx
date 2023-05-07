import { Outlet, Link, NavLink, useLoaderData, redirect } from 'react-router-dom'

export async function loader(params, user, getHostVans) {
    if (!user) return redirect("/login?message=You must login first")
    return getHostVans(params.id)
}

export default function HostVanDetail() {
    const hostVan = useLoaderData()
    
    return (
        <>
        <Link
        to='/host'
        relative='path'
        className='back-button'>
        &larr; <span>Back to all vans</span>
        </Link>

        
        <section className='host-van-detail'>

            <div className='host-van-card'>
                <img src={hostVan.imageUrl} alt={`Host Van Image of ${hostVan.name}`} className='host-van'/>
                <span className={`van-type ${hostVan.type} host-van-type`}>{hostVan.type}</span>
                <div className='host-van-card-inner'>
                    <h3 className='host-van-name'>{hostVan.name}</h3>
                    <span className='host-van-price'>
                        ${hostVan.price}
                        <span className='day-text'>/day</span>
                    </span>
                </div>
            </div>

            <div className='host-van-content'>
                <nav className='host-van-detail-nav'>
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
                <Outlet context={{hostVan}} />
            </div>
        </section>
        </>
    )
}