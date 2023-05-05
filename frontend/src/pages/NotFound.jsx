import { Link } from 'react-router-dom'
import './notFound.css'

export default function NotFound() {
    return (
        <section className='page-not-found'>
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to='/' className='return-home-link'>Return to home</Link>
        </section>
    )
}