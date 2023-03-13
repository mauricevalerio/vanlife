import {  Link, useParams, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function VanDetail() {
    const param = useParams()
    const location = useLocation()
    const [vanDetail, setVanDetail] = useState(null)
    console.log(location)
    useEffect(() => {
        axios.get(`/api/vans/${param.id}`)
        .then(response => setVanDetail(response.data.vans))
    }, [param.id])
   
    return (
        <section className='van-detail'>
            <Link
                to={`..?${location.state.search ? location.state.search : ''}`}
                relative='path'
                className='back-button'>
                &larr; <span>{`Back to ${location.state.type ? location.state.type : 'all'} vans`}</span>
            </Link>
            {vanDetail ? (
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
            )
            : <h2>Loading...</h2>
            }
        </section>
    )
}