import React from 'react';
import '../css/Hero.css';
import { Link } from 'react-router-dom';

const Hero = ({ heading, subheading, isButton }) => {
    return (
        <div className="hero-banner font-poppins">
            <div className="hero-banner__content">
                {/* <img src={navlogo} className="w-20 h-20" alt='logo' /> */}
                <h1 className="hero-banner__heading">{heading}</h1>
                <p className="hero-banner__description">
                    {subheading}
                </p>
                <div className='hero-banner__button'>
                    <Link to='/about'><button className="hero-banner__cta">Learn More</button></Link>
                    <button className="hero-banner__cta">Join Us</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
