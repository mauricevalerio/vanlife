import {  Link, useLocation, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api'

export async function loader({ params }) {
    try {
        return await getVans(params.id)
    } catch (e) {
        return e
    }
}

export default function VanDetail() {
    const location = useLocation()
    const vanDetail = useLoaderData()
    
    return (
        <section className='van-detail'>
            {vanDetail.message ? 
            <h1>{vanDetail.message}</h1>
            : 
            <>
                <Link
                    to={`..?${location.state.search ? location.state.search : ''}`}
                    relative='path'
                    className='back-button'>
                    &larr; <span>{`Back to ${location.state.type ? location.state.type : 'all'} vans`}</span>
                </Link>
                <div className='van-detail-inner'>
                    <img src={vanDetail.imageUrl} className='van-image'/>
                    <span className={`van-type ${vanDetail.type}`}>{vanDetail.type}</span>
                    <h2 className='van-name'>{vanDetail.name}</h2>
                    <p className='van-price'>
                        <span className='van-price-inner'>${vanDetail.price}
                        </span>/day
                    </p>
                    <p>{vanDetail.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            </>}
        </section>
    )
}