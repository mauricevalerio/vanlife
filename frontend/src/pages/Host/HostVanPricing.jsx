import { useOutletContext } from 'react-router-dom'

export default function HostVanPricing() {
    const {hostVan} = useOutletContext()

    return (
        <p className='van-price'>
            <span className='van-price-inner'>${hostVan.price}
            </span>/day
        </p>
    )
}