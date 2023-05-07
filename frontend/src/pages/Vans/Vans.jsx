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
        return  <Link to={van._id} key={van._id} state={{
            search: `${searchParams.toString()}`,
            type: typeFilter
        }}><div  className='all-vans-card'>
            <img src={van.imageUrl} alt={`Image of ${van.name}`} className='all-vans-image'/>
            <div className='all-vans-info'>
                <h2 className='all-vans-name'>{van.name}</h2>
                <p className='all-vans-price'>
                    <span className='all-vans-price-inner'>${van.price}
                    </span>/day
                </p>
            </div>
            <span className={`all-vans-type ${van.type}`}>{van.type}</span>
            </div></Link>
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
        <section className='all-vans'>
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