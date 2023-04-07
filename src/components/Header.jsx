import { NavLink, Link } from 'react-router-dom'
import LoginIcon from '../assets/login-icon.png'

export default function Header() {
    return (
        <header>
            <Link to='/' className='logo'><h1>#VANLIFE</h1></Link>
            <nav className='main'>
                <NavLink 
                to='host'
                className={({isActive}) => isActive ? 'active-main-link' : null}
                >Host
                </NavLink>
                
                <NavLink 
                to='about'
                className={({isActive}) => isActive ? 'active-main-link' : null}
                >About
                </NavLink>
                
                <NavLink 
                to='vans'
                className={({isActive}) => isActive ? 'active-main-link' : null}
                >Vans
                </NavLink>

                <NavLink
                to='login'
                className={({isActive}) => isActive ? 'active-main-link' : null}>
                <img src={LoginIcon} alt='Login Icon' className='login'/>
                </NavLink>
                
            </nav>
        </header>
    )
}