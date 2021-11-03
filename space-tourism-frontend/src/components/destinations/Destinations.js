import React from 'react';

import Header from '../Header';
import SubHeader from './SubHeader';

// destinations
import Moon from './Moon';

const Destinations = () => {
    return(
        <div className='destinations component-body'>
             <Header />
            <div className= 'grid-container grid-container--destination'>
                <h1 className='numbered-title'><span className=''>01</span>Pick your destination</h1>
                <SubHeader />
                <Moon />
            </div>
        </div>
    )
}

export default Destinations;