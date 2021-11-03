import React from 'react';

import Header from '../Header';
import SubHeader from './SubHeader';

// destinations
import Moon from './Moon';

const Destinations = () => {
    return(
        <div className='destinations component-body'>
             <Header />
            <main className= 'grid-container grid-container--destination'>
                <h1 className='numbered-title'><span className=''>01</span>Pick your destination</h1>
                <img src='./../../assets/destination/image-moon.webp' alt='the moon'/>
                <SubHeader />
            </main>
        </div>
    )
}

export default Destinations;