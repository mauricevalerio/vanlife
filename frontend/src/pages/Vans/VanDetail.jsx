import {  Link, useLocation, useLoaderData } from 'react-router-dom'

export async function loader(params, getVans) {
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
                    <img src={vanDetail.imageUrl} alt={`Image of ${vanDetail.name}`} className='van-detail-image'/>
                    <span className={`van-detail-type ${vanDetail.type}`}>{vanDetail.type}</span>
                    <h2 className='van-detail-name'>{vanDetail.name}</h2>
                    <p className='van-detail-price'>
                        <span className='van-detail-price-inner'>${vanDetail.price}
                        </span>/day
                    </p>
                    <p className='van-detail-description'>{vanDetail.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            </>}
        </section>
    )
}