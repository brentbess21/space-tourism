import React from 'react';
import { useParams } from 'react-router-dom';

import Tabs from './Tabs';
import Header from './../Header';

import data from './../../data/data.json';

const destination_data = JSON.parse(JSON.stringify(data.destinations));

const Destination = (props) => {
    
    const { destinations } = props;
    const { destinationName } = useParams();

    const destination = destinations.find(destination => destination.name === destinationName)
    console.log(destination)

    return (
       <div>
        <Header />
        <main id="main" className="grid-container grid-container--destination flow">
                <h1 className="numbered-title"><span>01</span> Pick your destination</h1>

                <img src={destination.images.webp} alt={destination.name} />

                <Tabs destination={destination_data}/>
                <article className="destination-info">
                    <h2 className="fs-800 uppercase ff-serif">{destination.name}</h2>

                    <p>{destination.description}</p>
                
                    <div className="destination-meta flex">
                        <div>
                            <h3 className="txt-light fs-200 uppercase">Avg. distance</h3>
                            <p classNa me="fs-500 ff-serif uppercase">{destination.distance}</p>
                        </div>
                        <div>
                            <h3 className="txt-light fs-200 uppercase">Est. travel time</h3>
                            <p className="fs-500 ff-serif uppercase">{destination.travel}</p>
                        </div>
                    </div>
                </article>
            </main>
        </div> 
    )
}

export default Destination;