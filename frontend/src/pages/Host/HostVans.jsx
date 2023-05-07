import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import TrashIcon from '../../assets/trash.svg'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export async function loader(user, getHostVans) {
    if (!user) return redirect("/login?message=You must login first")
    return await getHostVans()
}

export default function HostVans() {
    const hostVanList = useLoaderData()
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    
    async function handleDelete(id) {
        try {
            const response = await fetch(`/api/host/vans/${id}`, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            
            if (!response.ok) throw json.message
            
            navigate('/host')

        } catch (e) {
            return e
        }
    }
    
    const hostVanElements = hostVanList.map(hostVan => 
        <div className='trash-container' key={hostVan._id}>
            <Link
            to={`vans/${hostVan._id}`}
            >
                <div className='host-van-card'>
                    <img src={hostVan.imageUrl} alt={`Host Van Image of ${hostVan.name}`} className='host-van-image' />
                    
                    <div className='host-van-card-inner'>
                        <h2 className='host-van-name'>{hostVan.name}</h2>
                        <span className='host-van-price'>
                            ${hostVan.price}
                            <span className='day-text'>/day</span>
                        </span>
                    </div>
                </div>
            </Link>
            <img src={TrashIcon} alt='Trash Icon' className='trash-icon' onClick={() => handleDelete(hostVan._id)}/>
        </div>
    )

    return (
        <div className='host-van-cards-container'>
            {hostVanElements}
        </div>
    )
}