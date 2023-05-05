import aboutImage from '../assets/about-image.png'
import { Link } from 'react-router-dom'
import "./about.css"

export default function About() {
    return (
        <>
            <img src={aboutImage} alt='Camper sitting on top of a van looking up' className='about'/>
            
            <div className='about-content'>
                <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
                
                <p className='general-text'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)</p>
                <p className='general-text'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                
                <div className='about-cta'>
                    <h3>Your destination is waiting. <br /> Your van is ready.</h3>
                    <Link className='link-button explore-vans' to='/vans'>Explore our vans</Link>
                </div>
            </div>
        </>
    )
}