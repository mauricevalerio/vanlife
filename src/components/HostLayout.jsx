import { NavLink, Outlet } from 'react-router-dom'

//className does not work

export default function HostNavbar() {
    const style = {
        color: '#161616',
        textDecoration: 'underline',
        fontWeight: '600'
    }
    return (
        <>
            <nav className='host'>
                <NavLink 
                to='.'
                end
                style={({isActive}) => isActive ? style : null}
                >Dashboard
                </NavLink>

                <NavLink 
                to='income'
                style={({isActive}) => isActive ? style : null}
                >Income
                </NavLink>

                <NavLink 
                to='vans'
                style={({isActive}) => isActive ? style : null}
                >Vans
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