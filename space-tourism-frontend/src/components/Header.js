import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/home" className='txt-white'>00 Home</Link>
                <a href='#' className='txt-white'>01 Destination</a>
                <a href='#' className='txt-white'>02 Crew</a>
                <a href='#' className='txt-white'>03 Technology</a>
            </nav>
        </header>
    );
}

export default Header;