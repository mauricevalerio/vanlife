import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className='home'>
            <h2>You got the travel plans, we got the travel vans.</h2>
            <p className='home-text'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link className='link-button find-van-button' to='/vans'>Find your van</Link>
        </section>
    )
}