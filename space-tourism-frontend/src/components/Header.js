import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="primary-header flex">
            <div>
                <img src='./../../assets/shared/logo.svg' alt='space tourism logo' />
            </div>
            <button className='mobile-nav-toggle' aria-controls='primary-navigation'><span className='sr-only' aria-expanded='false'>Menu</span></button>
            <nav>
                <ul id="primary-navigation" className="primary-navigation underline-indicators flex">
                    <li>
                        <Link to="/" className="txt-white uppercase letter-spacing-2 ff-sans-cond"><span>00</span>Home</Link>
                    </li>
                    <li>
                        <Link to="/" className="txt-white uppercase letter-spacing-2 ff-sans-cond"><span>01</span>Destination</Link>
                    </li>
                    <li>
                        <Link to="/" className="txt-white uppercase letter-spacing-2 ff-sans-cond"><span>02</span>Crew</Link>
                    </li>
                    <li>
                        <Link to="/" className="txt-white uppercase letter-spacing-2 ff-sans-cond"><span>03</span>Technology</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;