import React from 'react';

import Tabs from './Tabs';

const Destination = (props) => {
    const { destination } = props;

    return (
        <main id="main" className="grid-container grid-container--destination flow">
            <h1 className="numbered-title"><span>01</span> Pick your destination</h1>

            <img src={destination.images.webp} alt={destination.name} />

            <Tabs />
            <article className="destination-info">
                <h2 className="fs-800 uppercase ff-serif">{destination.name}</h2>

                <p>{destination.description}</p>
            
                <div className="destination-meta flex">
                    <div>
                        <h3 className="txt-light fs-200 uppercase">Avg. distance</h3>
                        <p className="fs-500 ff-serif uppercase">{destination.distance}</p>
                    </div>
                    <div>
                        <h3 className="txt-light fs-200 uppercase">Est. travel time</h3>
                        <p className="fs-500 ff-serif uppercase">{destination.travel}</p>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Destination;