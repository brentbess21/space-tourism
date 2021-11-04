import { React, useState } from 'react';
import data from './../../data/data.json';

import Header from '../Header';

// destinations
import Moon from './Moon';
import Destination from './Destination';

const destination_data = JSON.parse(JSON.stringify(data.destinations))


const Destinations = () => {
    const [ destinations, setDestinations ] = useState(destination_data)
    

    return(
        <div>
            <Header />
            
            {destinations.map(destination => {
                return <Destination destination={destination} key={destination.name}/>
            })}
             
        </div>
    )
}

export default Destinations;