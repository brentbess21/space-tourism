import { React, useState } from 'react';
import data from './../../data/data.json';

import Header from '../Header';

// destinations
import Destination from './Destination';



const Destinations = (props) => {    

    return(
        <div>
            {/* <Header />
            
            {destinations.map(destination => {
                return <Destination destination={destination} key={destination.name}/>
            })} */}
             
        </div>
    )
}

export default Destinations;