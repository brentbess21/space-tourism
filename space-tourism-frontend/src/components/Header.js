import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="primary-header">
            <nav>
                <ul>
                    <li>
                        <Link to="/" className='txt-white'><span>00</span>Home</Link>
                    </li>
                    <li>
                        <Link to="/" className='txt-white'><span>01</span>Destination</Link>
                    </li>
                    <li>
                        <Link to="/" className='txt-white'><span>02</span>Crew</Link>
                    </li>
                    <li>
                        <Link to="/" className='txt-white'><span>03</span>Technology</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;