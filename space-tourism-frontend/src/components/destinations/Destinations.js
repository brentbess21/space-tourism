import React from 'react';

import Header from '../Header';
import Tabs from './Tabs';

// destinations
import Moon from './Moon';

const Destinations = () => {
    return(
        <div>
            <Header />
            <div className='destinations component-body flow'>
                <h1 className='numbered-title'><span className=''>01</span>Pick your destination</h1>
                <Moon />
             </div>
        </div>
    )
}

export default Destinations;