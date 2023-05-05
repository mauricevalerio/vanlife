import { Link, useSearchParams, useLoaderData } from 'react-router-dom'

export async function loader(getVans) {
    return await getVans()
}

export default function Vans() {
    const vansData = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')

    const filteredVans = typeFilter 
    ? vansData.filter(van => van.type === typeFilter)
    : vansData

    const vansElements = filteredVans.map(van => {
        return  <div key={van._id} className='van-card'>
        <Link to={van._id} state={{
            search: `${searchParams.toString()}`,
            type: typeFilter
        }}>
            <img src={van.imageUrl} alt={`Image of ${van.name}`} className='van-image'/>
            <div className='van-summary'>
                <h2 className='van-name'>{van.name}</h2>
                <p className='van-price'>
                    <span className='van-price-inner'>${van.price}
                    </span>/day
                </p>
            </div>
            <span className={`van-type ${van.type}`}>{van.type}</span>
        </Link></div>
    })

    function handleFilter(key, value) {
        setSearchParams(prevParams => {
            if (value === null) { //clears the type search parameter if value is null
                prevParams.delete('type')
            } else {
                prevParams.set(key, value)
            }
            return prevParams.toString()
        })
    }
    return (
        <section className='van'>
            <h1>Explore our van options</h1>
            <div className='filters'>
                <button className={`filter simple ${typeFilter === 'simple' && 'selected'}`} onClick={() => handleFilter('type','simple')}>Simple</button>
                <button className={`filter luxury ${typeFilter === 'luxury' && 'selected'}`} onClick={() => handleFilter('type','luxury')}>Luxury</button>
                <button className={`filter rugged ${typeFilter === 'rugged' && 'selected'}`} onClick={() => handleFilter('type','rugged')}>Rugged</button>
                {typeFilter && <button className='filter clear-type-filter' onClick={() => handleFilter('type',null)}>Clear Filters</button>}
            </div>
            <div className='van-list'>
                {vansElements}
            </div>
        </section>
    )
}