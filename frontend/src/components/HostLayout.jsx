import { NavLink, Outlet } from 'react-router-dom'
import "./hostLayout.css"


export default function HostNavbar() {
    const style = {
        color: '#161616',
        textDecoration: 'underline',
        fontWeight: '600'
    }
    return (
        <>
            <nav>
                <NavLink 
                to='.'
                end
                style={({isActive}) => isActive ? style : null}
                >Dashboard
                </NavLink>

                <NavLink 
                to='add-van'
                style={({isActive}) => isActive ? style : null}
                >Add Van
                </NavLink>

                <NavLink 
                to='vans'
                style={({isActive}) => isActive ? style : null}
                >Van List
                </NavLink>

                <NavLink 
                to='reviews'
                style={({isActive}) => isActive ? style : null}
                >Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}