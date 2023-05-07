import { useOutletContext } from 'react-router-dom'

export default function HostVanPricing() {
    const {hostVan} = useOutletContext()

    return (
        <span className='host-van-price'>
            ${hostVan.price}
            <span className='day-text'>/day</span>
        </span>
    )
}