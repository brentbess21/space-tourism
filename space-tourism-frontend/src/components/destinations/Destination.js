import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from './../Header';

import data from './../../data/data.json';

const destination_data = JSON.parse(JSON.stringify(data.destinations));

const Destination = (props) => {
    
    const { destinations } = props;
    const { destinationName } = useParams();

    const destination = destinations.find(destination => destination.name === destinationName)
    console.log(destination)

    return (
       <div className='destinations component-body'>
        <Header />
        <main id="main" class="grid-container grid-container--destination flow">
                <h1 className="numbered-title"><span>01</span> Pick your destination</h1>
                <img src={destination.images.png} alt={destination.name} />

                <div class="tab-list underline-indicators flex">
                    <Link to={`/destinations/Moon`}  className="uppercase ff-sans-cond txt-light bg-dark letter-spacing-2 no-decoration" >Moon</Link>
                    <Link to={`/destinations/Mars`}  className="uppercase ff-sans-cond txt-light bg-dark letter-spacing-2 no-decoration" >Mars</Link>
                    <Link to={`/destinations/Europa`}  className="uppercase ff-sans-cond txt-light bg-dark letter-spacing-2 no-decoration" >Europa</Link>
                    <Link to={`/destinations/Titan`}  className="uppercase ff-sans-cond txt-light bg-dark letter-spacing-2 no-decoration" >Titan</Link>
                </div>

                


                <article className="destination-info">
                    <h2 className="fs-800 uppercase ff-serif">{destination.name}</h2>

                    <p>{destination.description}</p>
                
                    <div className="destination-meta flex">
                        <div>
                            <h3 className="txt-light fs-200 uppercase">Avg. distance</h3>
                            <p classNa me="ff-serif uppercase">{destination.distance}</p>
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