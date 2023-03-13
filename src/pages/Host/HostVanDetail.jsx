import { Outlet, Link, NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function HostVanDetail() {
    const style = {
        color: '#161616',
        textDecoration: 'underline',
        fontWeight: '600'
    }

    const { id } = useParams()
    const [hostVan, setHostVan] = useState(null)

    useEffect(() => {
        axios.get(`/api/host/vans/${id}`)
            .then(response => setHostVan(response.data.vans))
    }, [id])
    
    return (
        <section className='van-detail'>
            <Link
            to='/host/vans'
            relative='path'
            className='back-button'>
            &larr; <span>Back to all vans</span>
            </Link>
            {hostVan ? (
                <>
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
                </>
            )
            : <h2>Loading...</h2>
            }
        </section>
    )
}