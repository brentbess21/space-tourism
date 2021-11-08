import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Header from './../Header';

const Destination = (props) => {
    
    const { destinations } = props;
    const { destinationName } = useParams();

    const destination = destinations.find(destination => destination.name === destinationName)

    return (
       <div className='destinations component-body'>
        <Header />
        <main id="main" className="grid-container grid-container--destination flow">
                <h1 className="numbered-title"><span>01</span> Explore the destinations</h1>
                <img src={destination.images.png} alt={destination.name} />

                <div className="tab-list underline-indicators flex">
                    <Link to={`/destinations/Moon`} aria-selected='false' className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration" >Moon</Link>
                    <Link to={`/destinations/Mars`} aria-selected='false' className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration" >Mars</Link>
                    <Link to={`/destinations/Europa`} aria-selected='false'  className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration" >Europa</Link>
                    <Link to={`/destinations/Titan`} aria-selected='false' className="uppercase ff-sans-cond txt-light letter-spacing-2 no-decoration" >Titan</Link>
                </div>

                


                <article className="destination-info">
                    <h2 className="fs-800 uppercase ff-serif">{destination.name}</h2>

                    <p>{destination.description}</p>
                
                    <div className="destination-meta flex">
                        <div>
                            <h3 className="txt-light fs-200 uppercase">Avg. distance</h3>
                            <p className="ff-serif uppercase">{destination.distance}</p>
                        </div>
                        <div>
                            <h3 className="txt-light fs-200 uppercase">Est. travel time</h3>
                            <p className="ff-serif uppercase">{destination.travel}</p>
                        </div>
                    </div>
                </article>
            </main>
        </div> 
    )
}

export default Destination;