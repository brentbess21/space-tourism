import React from 'react';

import Tabs from './Tabs';

const Moon = () => {
    return (
        <main id="main" className="grid-container grid-container--destination flow">
            <h1 className="numbered-title"><span>01</span> Pick your destination</h1>

            <img src="./../../assets/destination/image-moon.webp" alt="the moon" />

            <Tabs />
            <article className="destination-info">
                <h2 className="fs-800 uppercase ff-serif">Moon</h2>

                <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                regain perspective and come back refreshed. While you’re there, take in some history 
                by visiting the Luna 2 and Apollo 11 landing sites.</p>
            
                <div className="destination-meta flex">
                    <div>
                        <h3 className="txt-light fs-200 uppercase">Avg. distance</h3>
                        <p className="fs-500 ff-serif uppercase">384,400 km</p>
                    </div>
                    <div>
                        <h3 className="txt-light fs-200 uppercase">Est. travel time</h3>
                        <p className="fs-500 ff-serif uppercase">3 days</p>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Moon;