import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import { useContext } from 'react'
import useLogout from '../hooks/useLogout'

export default function Header() {
    const { user } = useContext(AuthContext)
    const { logout } = useLogout()

    return (
        <header>
            <Link to='/' className='logo'><h1>#VANLIFE</h1></Link>
            <nav>

                {user && <NavLink 
                to='host'
                className={({isActive}) => isActive ? 'active-link' : null}
                >Host
                </NavLink>}
  
                
                <NavLink 
                to='about'
                className={({isActive}) => isActive ? 'active-link' : null}
                >About
                </NavLink>
                
                <NavLink 
                to='vans'
                className={({isActive}) => isActive ? 'active-link' : null}
                >Vans
                </NavLink>

                {!user && <NavLink
                to='login'
                className={({isActive}) => isActive ? 'active-link' : null}>
                Login
                </NavLink>}

                {user && <Link to="/" onClick={logout}>
                    Logout
                </Link>}
            </nav>
        </header>
    )
}