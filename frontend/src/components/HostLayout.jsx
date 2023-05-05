import { NavLink, Outlet } from 'react-router-dom'

export default function HostNavbar() {
    return (
        <section className='host-home'>
            <nav>
                <NavLink 
                to='.'
                end
                className={({isActive}) => isActive ? 'active-link' : null}
                >Van List
                </NavLink>

                <NavLink 
                to='add-van'
                className={({isActive}) => isActive ? 'active-link' : null}
                >Add Van
                </NavLink>
            </nav>
            <Outlet />
        </section>
    )
}